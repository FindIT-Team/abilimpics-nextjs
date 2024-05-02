"use server";

import { cache } from "react";
import { prisma } from "@/shared";

export const getAllCompetences = cache(async function (
    slug: string,
    offset?: string,
) {
    return prisma.competence.findMany({
        where: {
            competenceCategory: { slug },
        },
        cursor: offset
            ? {
                  id: offset,
              }
            : undefined,
        take: 6,
        skip: offset ? 1 : 0,
        orderBy: {
            updatedAt: "desc",
        },
        include: {
            image: true,
            competenceCategory: {
                select: {
                    slug: true,
                },
            },
        },
    });
});
