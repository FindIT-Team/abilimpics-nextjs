"use server";

import { cache } from "react";
import { prisma } from "@/shared";

export const getAllAnnouncements = cache(async function (offset?: string) {
    return prisma.announcement.findMany({
        cursor: offset
            ? {
                  id: offset,
              }
            : undefined,
        take: 6,
        skip: offset ? 1 : 0,
        include: {
            competence: {
                select: {
                    slug: true,
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
