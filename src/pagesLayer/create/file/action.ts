"use server";

import { saveFile } from "@/features/file-control";
import { createId, getReadableFileSize } from "@/shared";
import { fileSchema, FileSchema } from "../schemas";

export async function action(_prevState: any, formData: FormData) {
    const data = Object.fromEntries(formData.entries()) as FileSchema;

    const check = fileSchema.safeParse(data);
    if (!check.success)
        return {
            errors: check.error.flatten().fieldErrors,
        };

    const { name } = data;

    const file = formData.get("file") as File;

    const ext = file.name.slice(file.name.lastIndexOf("."));

    const fileId = createId();
    const webPath = `files/${fileId}${ext}`;

    try {
        const systemPath = await saveFile(file, fileId + ext, "files");
        await prisma.file.create({
            data: {
                name,
                systemPath,
                webPath,
                size: getReadableFileSize(file.size),
                type: file.type,
                competence: {
                    connect: {
                        slug: formData.get("competence") as string,
                        competenceCategory: {
                            slug: formData.get("competenceCategory") as string,
                        },
                    },
                },
            },
        });
    } catch (e) {
        if ((e as Error).cause instanceof File)
            return { errors: { file: [(e as Error).message] } };
        else return { errors: { database: [(e as Error).message] } };
    }

    return { message: "OK" };
}
