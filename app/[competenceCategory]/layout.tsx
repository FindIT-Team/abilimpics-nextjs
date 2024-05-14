import { ReactNode } from "react";
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

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return <>{children}</>;
}
