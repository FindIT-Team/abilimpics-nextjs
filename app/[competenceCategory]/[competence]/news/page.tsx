import { CompetenceNewsList } from "@/pagesLayer/competence/news";

export default function Page({
    params: { competenceCategory, competence },
}: {
    params: { competenceCategory: string; competence: string };
}) {
    const obj = { competenceCategory, competence };

    return <CompetenceNewsList init={obj} />;
}
