import { use } from "react";
import { Announcement } from "@/pages/announcement";
import { getOneAnnouncement } from "@/entities/announcements/queries/get-one";

export default function Page({
    params: { competenceCategory, competence, announcement },
}: {
    params: {
        competenceCategory: string;
        competence: string;
        announcement: string;
    };
}) {
    const obj = use(
        getOneAnnouncement(competenceCategory, competence, announcement),
    );

    return <Announcement init={obj} />;
}
