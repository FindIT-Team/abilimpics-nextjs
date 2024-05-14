"use server";

import { cache } from "react";
import { prisma } from "@/shared";

export const getAllFiles = cache(async function (
    category: string,
    competence: string,
    offset?: string,
) {
    return prisma.file.findMany({
        cursor: offset
            ? {
                  id: offset,
              }
            : undefined,
        take: 6,
        skip: offset ? 1 : 0,
        where: {
            competence: {
                slug: competence,
                competenceCategory: {
                    slug: category,
                },
            },
        },
    });
});
