"use server";

import { cache } from "react";
import { prisma } from "@/shared";

export const getOneCompetence = cache(async function (
    categorySlug: string,
    slug: string,
) {
    return prisma.competence.findUnique({
        where: { slug, competenceCategory: { slug: categorySlug } },
    });
});
