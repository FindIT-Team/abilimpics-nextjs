import { getOneAnnouncement } from "@/entities/announcements/queries/get-one";
import { Announcement } from "@/pagesLayer/competence/announcement";
import { use } from "react";

export default function Page({
    params: { competenceCategory, competence, announcement },
}: {
    params: {
        competenceCategory: string;
        competence: string;
        announcement: string;
    };
}) {
    const obj = use(getOneAnnouncement(announcement));

    return <Announcement init={obj} />;
}
