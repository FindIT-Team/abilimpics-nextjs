import { ImageDto } from "@/shared";

export interface CompetenceCardDto {
    id: string;
    title: string;
    description: string;
    image: ImageDto;
    slug: string;
    competenceCategory: {
        slug: string;
    };
}
