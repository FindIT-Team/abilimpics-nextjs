"use client";

import { VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { FormProvider as CFormProvider, useForm } from "react-hook-form";

export function FormProvider({
    children,
    action,
    schema,
}: {
    children: ReactNode;
    action: any;
    schema: any;
}) {
    const form = useForm({ mode: "onChange", resolver: zodResolver(schema) });

    return (
        <CFormProvider {...form}>
            <form action={action}>
                <VStack padding={5} spacing={5}>
                    {children}
                </VStack>
            </form>
        </CFormProvider>
    );
}
