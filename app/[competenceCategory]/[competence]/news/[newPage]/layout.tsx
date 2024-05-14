import { notFound } from "next/navigation";
import { ReactNode, use } from "react";
import { getOneNew } from "@/entities/news/queries/get-one";

export async function generateMetadata({
    params: { newPage },
}: {
    params: { newPage: string };
}) {
    const { title } = (await getOneNew(newPage)) ?? {
        title: null,
    };
    return { title: title + " | Абилимпикс - Москва" };
}

export default function RootLayout({
    children,
    params: { newPage },
}: Readonly<{
    children: ReactNode;
    params: { newPage: string };
}>) {
    const obj = use(getOneNew(newPage));
    if (!obj) notFound();

    return <>{children}</>;
}
