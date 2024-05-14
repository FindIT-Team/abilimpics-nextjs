import { notFound } from "next/navigation";
import { use } from "react";
import { Competence } from "@/pages/competence";
import { getOneCompetence } from "@/entities/competences";

export default function Page({
    params: { competenceCategory, competence },
}: {
    params: { competenceCategory: string; competence: string };
}) {
    const obj = use(getOneCompetence(competenceCategory, competence));
    if (!obj) notFound();

    return <Competence init={obj} />;
}
