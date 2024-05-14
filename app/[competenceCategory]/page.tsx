import { use } from "react";
import { CompetenceCategory } from "@/pages/competence-category";
import { getOneCompetenceCategory } from "@/entities/competence-categories";

export default function Page({
    params: { competenceCategory },
}: {
    params: { competenceCategory: string };
}) {
    const obj = use(getOneCompetenceCategory(competenceCategory));

    return <CompetenceCategory init={obj} />;
}
