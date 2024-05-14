export * from "./card-dto";

import { Image } from "@prisma/client";
import { NewsCardDto } from "./index";

export interface NewsDto extends NewsCardDto {
    competence: {
        slug: string;
        title: string;
        competenceCategory: {
            slug: string;
        };
    };
    images: Image[];
}
