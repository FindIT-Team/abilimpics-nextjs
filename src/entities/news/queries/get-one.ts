"use server";

import { cache } from "react";
import { prisma } from "@/shared";

export const getOneNews = cache(async function (
    competenceCategory: string,
    competence: string,
    slug: string,
) {
    return prisma.news.findUnique({
        where: {
            slug,
            competence: {
                slug: competence,
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
            images: {
                select: {
                    systemPath: true,
                    webPath: true,
                },
            },
            previewImage: {
                select: {
                    systemPath: true,
                    webPath: true,
                },
            },
        },
    });
});
