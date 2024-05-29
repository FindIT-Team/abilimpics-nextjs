"use server";

import { isImageUnique } from "@/pages/create/is-image-unique";
import { newsSchema, NewsSchema } from "@/pages/create/schemas";
import { deleteImage, saveImage } from "@/features/image-control";
import { createId, prisma } from "@/shared";
import { hasRole } from "@/features/roles/actions/get";

export async function action(_prevState: any, formData: FormData) {
    if (!(await hasRole(["ADMIN", formData.get("competence") as string])))
        return {
            errors: {
                permissions: ["У вас нет права на создание новой новости"],
            },
        };

    const data = Object.fromEntries(formData.entries()) as NewsSchema;

    const check = newsSchema.safeParse(data);
    if (!check.success)
        return {
            errors: check.error.flatten().fieldErrors,
        };

    const { title, content, slug } = data;

    const images: {
        id: string;
        image: File;
        webPath: string;
        systemPath: string;
    }[] = [
        formData.get("previewImage") as File,
        ...(formData.getAll("images") as File[]),
    ]
        .map((image) => ({ id: createId(), image, systemPath: "" }))
        .map((obj) => ({ ...obj, webPath: `news/${obj.id}` }));

    for (const { webPath } of images) {
        const isImageUniqueCheck = await isImageUnique(webPath);
        if (!isImageUniqueCheck.success) return isImageUniqueCheck;
    }

    try {
        for (const obj of images) {
            Object.assign(obj, {
                systemPath: await saveImage(obj.image, obj.id, "news"),
            });
        }
    } catch (e) {
        images.forEach(({ systemPath }) => {
            if (systemPath === "") return;
            deleteImage(systemPath);
        });
        return {
            errors: { images: ["Array of images includes non-image files"] },
        };
    }

    try {
        await prisma.news.create({
            data: {
                title,
                content,
                slug,
                competence: {
                    connect: {
                        slug: formData.get("competence") as string,
                        competenceCategory: {
                            slug: formData.get("competenceCategory") as string,
                        },
                    },
                },
                previewImage: {
                    create: {
                        webPath: images[0].webPath,
                        systemPath: images[0].systemPath,
                    },
                },
                images: {
                    createMany: {
                        data: images
                            .slice(1)
                            .map(({ webPath, systemPath }) => ({
                                webPath,
                                systemPath,
                            })),
                    },
                },
            },
        });
    } catch (e) {
        return { errors: { database: [(e as Error).message] } };
    }

    return { message: "OK" };
}
