"use client";

import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function Layout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    const form = useForm();
    return <FormProvider {...form}>{children}</FormProvider>;
}
