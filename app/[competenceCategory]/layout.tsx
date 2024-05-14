import { notFound } from "next/navigation";
import { ReactNode, use } from "react";
import { getOneCompetenceCategory } from "@/entities/competence-categories";

export async function generateMetadata({
    params: { competenceCategory },
}: {
    params: { competenceCategory: string };
}) {
    const { title } = (await getOneCompetenceCategory(competenceCategory)) ?? {
        title: null,
    };
    return { title: title + " | Абилимпикс - Москва" };
}

export default function Layout({
    children,
    params: { competenceCategory },
}: Readonly<{
    children: ReactNode;
    params: { competenceCategory: string };
}>) {
    const obj = use(getOneCompetenceCategory(competenceCategory));
    if (!obj) notFound();

    return <>{children}</>;
}
