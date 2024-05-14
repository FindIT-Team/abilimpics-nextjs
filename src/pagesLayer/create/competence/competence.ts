"use server";

import { saveFile } from "@/features/file-control";
import { createId, prisma } from "@/shared";

export async function competenceCreate(formData: FormData) {
    const imageId = createId();
    const webPath = `competence/${imageId}`;

    if (await prisma.image.findUnique({ where: { webPath } }))
        throw new Error("Image already exists");

    const systemPath = await saveFile(
        formData.get("image") as File,
        imageId,
        "competence",
    );

    return prisma.competence.create({
        data: {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            slug: formData.get("slug") as string,
            competenceCategory: {
                connect: {
                    slug: formData.get("competenceCategory") as string,
                },
            },
            image: {
                create: { systemPath, webPath },
            },
        },
    });
}
