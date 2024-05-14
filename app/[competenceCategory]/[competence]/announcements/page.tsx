import { CompetenceAnnouncementsList } from "@/pagesLayer/competence/announcements";

export default function Page({
    params: { competenceCategory, competence },
}: {
    params: { competenceCategory: string; competence: string };
}) {
    const obj = { competenceCategory, competence };

    return <CompetenceAnnouncementsList init={obj} />;
}
