import { notFound } from "next/navigation";
import { ReactNode, use } from "react";
import { getOneCompetence } from "@/entities/competences";

export async function generateMetadata({
    params: { competenceCategory, competence },
}: {
    params: { competenceCategory: string; competence: string };
}) {
    const { title } = (await getOneCompetence(
        competenceCategory,
        competence,
    )) ?? {
        title: null,
    };
    return { title: title + " | Абилимпикс - Москва" };
}

export default function Layout({
    children,
    params: { competenceCategory, competence },
}: Readonly<{
    children: ReactNode;
    params: { competenceCategory: string; competence: string };
}>) {
    const obj = use(getOneCompetence(competenceCategory, competence));
    if (!obj) notFound();

    return <>{children}</>;
}
