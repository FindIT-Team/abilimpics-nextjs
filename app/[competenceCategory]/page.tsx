import { notFound } from "next/navigation";
import { use } from "react";
import { CompetenceCategory } from "@/pagesLayer/competence-category";
import { getOneCompetenceCategory } from "@/entities/competence-categories";

type Props = {
    params: { competenceCategory: string };
};

export async function generateMetadata({
    params: { competenceCategory },
}: Props) {
    const { title } = (await getOneCompetenceCategory(competenceCategory)) ?? {
        title: null,
    };
    return { title: title + " | Абилимпикс - Москва" };
}

export default function Page({ params: { competenceCategory } }: Props) {
    const obj = use(getOneCompetenceCategory(competenceCategory));
    if (!obj) notFound();

    return <CompetenceCategory init={obj} />;
}
