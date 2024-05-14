export * from "./card-dto";

import { AnnouncementCardDto } from "./index";

export interface AnnouncementDto extends AnnouncementCardDto {
    competence: {
        slug: string;
        title: string;
        competenceCategory: {
            slug: string;
        };
    };
}
