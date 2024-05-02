"use server";

import { cache } from "react";
import { prisma } from "@/shared";

export const getOneCompetenceCategory = cache(async function (slug: string) {
    return prisma.competenceCategory.findUnique({
        where: { slug },
        select: {
            slug: true,
            title: true,
            description: true,
        },
    });
});
