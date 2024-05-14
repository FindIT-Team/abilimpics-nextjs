"use server";

import { prisma } from "@/shared";
import { cache } from "react";

export const getOneNew = cache(async function (slug: string) {
    return prisma.news.findUnique({
        where: {
            slug,
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
                            slug: true
                        }
                    }
                }
            },
            images: {
                select: {
                    systemPath: true,
                    webPath: true
                }
            },
            previewImage: {
                select: {
                    systemPath: true,
                    webPath: true
                }
            }
        }
    })
})