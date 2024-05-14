import { use } from "react";
import { Competence } from "@/pages/competence";
import { getOneCompetence } from "@/entities/competences";

export default function Page({
    params: { competenceCategory, competence },
}: {
    params: { competenceCategory: string; competence: string };
}) {
    const obj = use(getOneCompetence(competenceCategory, competence));

    return <Competence init={obj} />;
}
