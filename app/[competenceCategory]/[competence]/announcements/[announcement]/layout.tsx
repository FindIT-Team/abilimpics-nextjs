import { notFound } from "next/navigation";
import { ReactNode, use } from "react";
import { getOneAnnouncement } from "@/entities/announcements/queries/get-one";

export default function Layout({
    children,
    params: { announcement, competenceCategory, competence },
}: Readonly<{
    children: ReactNode;
    params: {
        competenceCategory: string;
        competence: string;
        announcement: string;
    };
}>) {
    const obj = use(
        getOneAnnouncement(competenceCategory, competence, announcement),
    );
    if (!obj) notFound();

    return <>{children}</>;
}
