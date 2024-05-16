"use server";

import { cache } from "react";
import { prisma } from "@/shared";

export const getOneAnnouncement = cache(async function (
    competenceCategory: string,
    competence: string,
    slug: string,
) {
    return prisma.announcement.findUnique({
        where: {
            slug,
            competence: {
                competenceCategory: {
                    slug: competenceCategory,
                },
            },
        },
        select: {
            title: true,
            content: true,
            competence: {
                select: {
                    slug: true,
                    title: true,
                    competenceCategory: {
                        select: {
                            slug: true,
                        },
                    },
                },
            },
        },
    });
});
