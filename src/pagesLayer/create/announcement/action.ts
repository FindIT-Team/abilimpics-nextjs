"use server";

import { AnnouncementSchema, announcementSchema } from "@/pages/create/schemas";
import { prisma } from "@/shared";

export async function action(_prevState: any, formData: FormData) {
    const data = Object.fromEntries(formData.entries()) as AnnouncementSchema;

    const check = announcementSchema.safeParse(data);
    if (!check.success)
        return {
            errors: check.error.flatten().fieldErrors,
        };

    const { title, content, slug } = data;

    try {
        await prisma.announcement.create({
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
            },
        });
    } catch (e) {
        return { errors: { database: [(e as Error).message] } };
    }

    return { message: "OK" };
}
