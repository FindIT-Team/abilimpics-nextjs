"use server";

import { deleteFile, saveFile } from "@/features/file-control";
import { createId, prisma } from "@/shared";

export async function action(formData: FormData) {
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

    for (const { webPath } of images)
        if (
            await prisma.image.findUnique({
                where: { webPath },
            })
        )
            throw new Error("Image already exists");
    try {
        for (const obj of images) {
            Object.assign(obj, {
                systemPath: await saveFile(obj.image, obj.id, "news"),
            });
        }
    } catch (e) {
        images.forEach(({ systemPath }) => {
            if (systemPath === "") return;
            deleteFile(systemPath);
            throw e;
        });
    }

    return prisma.news.create({
        data: {
            title: formData.get("title") as string,
            content: formData.get("content") as string,
            slug: formData.get("slug") as string,
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
                    data: images.slice(1).map(({ webPath, systemPath }) => ({
                        webPath,
                        systemPath,
                    })),
                },
            },
        },
    });
}
