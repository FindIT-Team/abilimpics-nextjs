"use server";

import { isImageUnique } from "@/pages/create/is-image-unique";
import { saveImage } from "@/features/image-control";
import { createId, prisma } from "@/shared";
import { competenceCategorySchema, CompetenceCategorySchema } from "../schemas";
import { hasRole } from "@/features/roles/actions/get";

export async function competenceCategoryCreate(
    _prevState: any,
    formData: FormData,
) {
    if (!(await hasRole("ADMIN")))
        return {
            errors: {
                permissions: ["У вас нет права на создание новой компетенции"],
            },
        };

    const data = Object.fromEntries(
        formData.entries(),
    ) as CompetenceCategorySchema;

    const check = competenceCategorySchema.safeParse(data);
    if (!check.success)
        return {
            errors: check.error.flatten().fieldErrors,
        };

    const { title, description, slug } = data;

    const imageId = createId();
    const webPath = `competence-categories/${imageId}`;

    const isImageUniqueCheck = await isImageUnique(webPath);
    if (!isImageUniqueCheck.success) return isImageUniqueCheck;

    try {
        const systemPath = await saveImage(
            formData.get("image") as File,
            imageId,
            "competence-categories",
        );

        await prisma.competenceCategory.create({
            data: {
                title,
                description,
                slug,
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
