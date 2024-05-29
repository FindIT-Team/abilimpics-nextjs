"use server";

import { isImageUnique } from "@/pages/create/is-image-unique";
import { saveImage } from "@/features/image-control";
import { createId, prisma } from "@/shared";
import { taskSchema, TaskSchema } from "../schemas";
import { hasRole } from "@/features/roles/actions/get";

export async function action(_prevState: any, formData: FormData) {
    if (!(await hasRole(["ADMIN", formData.get("competence") as string])))
        return {
            errors: {
                permissions: ["У вас нет права на создание новой новости"],
            },
        };

    const data = Object.fromEntries(formData.entries()) as TaskSchema;

    const check = taskSchema.safeParse(data);
    if (!check.success)
        return {
            errors: check.error.flatten().fieldErrors,
        };

    const { title, description, slug } = data;

    const imageId = createId();
    const webPath = `tasks/${imageId}`;

    const isImageUniqueCheck = await isImageUnique(webPath);
    if (!isImageUniqueCheck.success) return isImageUniqueCheck;

    try {
        const systemPath = await saveImage(
            formData.get("image") as File,
            imageId,
            "tasks",
        );
        await prisma.task.create({
            data: {
                title,
                description,
                slug,
                competence: {
                    connect: {
                        slug: formData.get("competence") as string,
                        competenceCategory: {
                            slug: formData.get("competenceCategory") as string,
                        },
                    },
                },
                image: {
                    create: { systemPath, webPath },
                },
            },
        });
    } catch (e) {
        if ((e as Error).cause instanceof File)
            return { errors: { image: [(e as Error).message] } };
        else return { errors: { database: [(e as Error).message] } };
    }

    return { message: "OK" };
}
