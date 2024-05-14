"use server";

import { saveFile } from "@/features/file-control";
import { createId, prisma } from "@/shared";

export async function competenceCategoryCreate(formData: FormData) {
    const imageId = createId();
    const webPath = `competence-category/${imageId}`;

    if (await prisma.image.findUnique({ where: { webPath } }))
        throw new Error("Image already exists");

    const systemPath = await saveFile(
        formData.get("image") as File,
        imageId,
        "competence-category",
    );

    return prisma.competenceCategory.create({
        data: {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            slug: formData.get("slug") as string,
            image: {
                create: { systemPath, webPath },
            },
        },
    });
}
