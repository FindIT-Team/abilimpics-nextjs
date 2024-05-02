import { Image } from "@prisma/client";

export interface CompetenceCategoryCardDto {
    id: string;
    title: string;
    description: string;
    slug: string;
    image: Image;
}
