import { use } from "react";
import { News } from "@/pages/news";
import { getOneNews } from "@/entities/news/queries/get-one";

export default function Page({
    params: { competenceCategory, competence, news },
}: {
    params: { competenceCategory: string; competence: string; news: string };
}) {
    const obj = use(getOneNews(competenceCategory, competence, news))!;

    return <News init={obj} />;
}
