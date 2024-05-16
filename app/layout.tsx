import "./globals.css";
import { ReactNode } from "react";
import { MainBox } from "@/app/components";
import { Footer } from "@/widgets/footer";
import { Navbar } from "@/widgets/navbar";
import { BackToTop } from "@/features/back-to-top";
import { inter } from "@/shared";
import { Providers } from "./providers";

export const metadata = { title: "Абилимпикс - Москва" };

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={inter.className}>
                <Providers>
                    <BackToTop />
                    <Navbar />
                    <MainBox>{children}</MainBox>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
