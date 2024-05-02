"use server";

import { cache } from "react";
import { prisma } from "@/shared";

export const getAllCompetenceCategories = cache(async function (
    offset?: string,
) {
    return prisma.competenceCategory.findMany({
        cursor: offset
            ? {
                  id: offset,
              }
            : undefined,
        take: 6,
        skip: offset ? 1 : 0,
        include: {
            image: true,
        },
    });
});
