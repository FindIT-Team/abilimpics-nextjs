"use server";

import { saveFile } from "@/features/file-control";
import { createId, prisma } from "@/shared";

export async function action(formData: FormData) {
    const imageId = createId();
    const webPath = `competence/${imageId}`;

    if (await prisma.image.findUnique({ where: { webPath } }))
        throw new Error("Image already exists");

    const systemPath = await saveFile(
        formData.get("image") as File,
        imageId,
        "competence",
    );

    return prisma.task.create({
        data: {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            slug: formData.get("slug") as string,
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
}
