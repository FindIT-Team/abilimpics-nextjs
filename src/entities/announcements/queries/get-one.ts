"use server";

import { prisma } from "@/shared";
import { cache } from "react";

export const getOneAnnouncement = cache(async function (slug: string) {
    return prisma.announcement.findUnique({
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
        }
    })
})