"use server";

import { Hint } from "@/features/search-competence/hint";
import { prisma } from "@/shared";

export async function searchCompetences(query: string) {
    const competenceCategories = await prisma.competenceCategory.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: query,
                        mode: "insensitive",
                    },
                },
                {
                    description: {
                        contains: query,
                        mode: "insensitive",
                    },
                },
            ],
        },
        select: {
            title: true,
            slug: true,
        },
    });
    const competences = await prisma.competence.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: query,
                        mode: "insensitive",
                    },
                },
                {
                    description: {
                        contains: query,
                        mode: "insensitive",
                    },
                },
            ],
        },
        select: {
            title: true,
            slug: true,
            competenceCategory: { select: { title: true, slug: true } },
        },
    });

    return [
        ...competences.map((obj) => {
            const {
                competenceCategory: { title, slug },
                ...res
            } = obj;

            res.title = `${obj.title} (${title})`;
            res.slug = `${slug}/${obj.slug}`;

            return res;
        }),
        ...competenceCategories,
    ] as Hint[];
}
