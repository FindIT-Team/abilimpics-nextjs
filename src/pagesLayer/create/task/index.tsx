"use client";

import { Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";
import { ExtraRouteInfo, FormProvider } from "@/pages/create";
import { PendingProvider, SingleFileField, SlugField } from "@/shared";
import { action } from "./action";

export function CreateTask() {
    const { register } = useFormContext();

    return (
        <FormProvider action={action}>
            <Heading>Создание задачи</Heading>
            <VStack width={"full"}>
                <PendingProvider>
                    <Input {...register("title")} placeholder={"Название"} />
                </PendingProvider>
                <PendingProvider>
                    <Textarea
                        {...register("description")}
                        placeholder={"Описание"}
                        resize={"none"}
                    />
                </PendingProvider>
                <SlugField watchFor={"title"} />
                <SingleFileField
                    name={"image"}
                    accept={"image/*"}
                    label={"Фото"}
                />
                <ExtraRouteInfo />
            </VStack>
        </FormProvider>
    );
}
