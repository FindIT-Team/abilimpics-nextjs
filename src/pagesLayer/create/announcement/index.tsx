"use client";

import { Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { ExtraRouteInfo, FormProvider } from "@/pages/create";
import { PendingProvider, SlugField } from "@/shared";
import { action } from "./action";

export function CreateAnnouncement() {
    const { register } = useFormContext();

    return (
        <FormProvider action={action}>
            <Heading>Создание объявления</Heading>
            <VStack width={"full"}>
                <PendingProvider>
                    <Input {...register("title")} placeholder={"Название"} />
                </PendingProvider>
                <PendingProvider>
                    <Textarea
                        {...register("content")}
                        placeholder={"Контент"}
                        resize={"none"}
                        height={300}
                    />
                </PendingProvider>
                <SlugField watchFor={"title"} />
                <ExtraRouteInfo />
            </VStack>
        </FormProvider>
    );
}
