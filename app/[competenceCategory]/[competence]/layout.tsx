import { ReactNode } from "react";
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

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return <>{children}</>;
}
