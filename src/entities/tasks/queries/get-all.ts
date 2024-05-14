"use server";

import { cache } from "react";
import { prisma } from "@/shared";

export const getAllTasks = cache(async function (
    competenceCategory?: string,
    competence?: string,
    offset?: string,
) {
    return prisma.task.findMany({
        cursor: offset
            ? {
                  id: offset,
              }
            : undefined,
        take: 6,
        skip: offset ? 1 : 0,
        ...(competence &&
            competenceCategory && {
                where: {
                    competence: {
                        slug: competence,
                        competenceCategory: {
                            slug: competenceCategory,
                        },
                    },
                },
            }),
    });
});
