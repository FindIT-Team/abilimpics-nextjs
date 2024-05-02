export interface AnnouncementCardDto {
    id: string;
    title: string;
    content: string;
    createdAt: string;

    slug: string;
    competence: {
        slug: string;
        competenceCategory: {
            slug: string;
        };
    };
}
