import { notFound } from "next/navigation";
import { ReactNode, use } from "react";
import { getOneNews } from "@/entities/news";

export default function Layout({
    children,
    params: { competenceCategory, competence, news },
}: Readonly<{
    children: ReactNode;
    params: {
        competenceCategory: string;
        competence: string;
        news: string;
    };
}>) {
    const obj = use(getOneNews(competenceCategory, competence, news));
    if (!obj) notFound();

    return <>{children}</>;
}
