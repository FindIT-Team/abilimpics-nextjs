"use client";

import { useToast, VStack } from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";
import { useFormState } from "react-dom";
import { BackButton } from "@/features/back-button";
import { SubmitButton } from "@/shared";

export function FormProvider({
    children,
    action,
}: {
    children: ReactNode;
    action: any;
}) {
    const [state, formAction] = useFormState(action, null);
    const toast = useToast();

    useEffect(() => {
        if (state && "errors" in state) {
            const { errors } = state as { errors: Record<string, string[]> };
            for (const key in errors) {
                toast({
                    title: "Ошибка",
                    description: `${key}: ${errors[key].join(", ")}`,
                    status: "error",
                });
            }
        } else if (state && "message" in state) {
            const { message } = state as { message: string };
            message === "OK" &&
                toast({
                    title: "Успешно",
                    status: "success",
                });
        }
    }, [state]);

    return (
        <form action={formAction}>
            <VStack padding={5} spacing={5}>
                {children}
                <VStack>
                    <SubmitButton label={"Создать"} />
                    <BackButton />
                </VStack>
            </VStack>
        </form>
    );
}
