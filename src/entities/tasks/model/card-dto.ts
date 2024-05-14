import { ImageDto } from "@/shared";

export interface TaskCardDto {
    id: string;
    title: string;
    description: string;
    slug: string;
    image: ImageDto;

    competence: {
        slug: string;
        competenceCategory: {
            slug: string;
        };
    };
}
