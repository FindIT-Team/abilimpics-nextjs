import { getOneAnnouncement } from "@/entities/announcements/queries/get-one";
import { notFound } from "next/navigation";
import { ReactNode, use } from "react";

export async function generateMetadata({
    params: { announcement },
}: {
    params: { announcement: string };
}) {
    const { title } = (await getOneAnnouncement(announcement)) ?? {
        title: null,
    };
    return { title: title + " | Абилимпикс - Москва" };
}

export default function RootLayout({
    children,
    params: { announcement },
}: Readonly<{
    children: ReactNode;
    params: { announcement: string };
}>) {
    const obj = use(getOneAnnouncement(announcement));
    if (!obj) notFound();

    return <>{children}</>;
}
