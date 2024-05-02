import { Image } from "@prisma/client";

export interface NewsCardDto {
    id: string;
    title: string;
    content: string;
    previewImage: Image;
    slug: string;
    competence: {
        slug: string;
        competenceCategory: {
            slug: string;
        };
    };
}
