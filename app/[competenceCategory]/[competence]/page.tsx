import { notFound } from "next/navigation";
import { use } from "react";
import { Competence } from "@/pagesLayer/competence";
import { getOneCompetence } from "@/entities/competences";

type Props = {
    params: { competenceCategory: string; competence: string };
};

export async function generateMetadata({
    params: { competenceCategory, competence },
}: Props) {
    const { title } = (await getOneCompetence(
        competenceCategory,
        competence,
    )) ?? {
        title: null,
    };
    return { title: title + " | Абилимпикс - Москва" };
}

export default function Page({
    params: { competenceCategory, competence },
}: Props) {
    const obj = use(getOneCompetence(competenceCategory, competence));
    if (!obj) notFound();

    return <Competence init={obj} />;
}
