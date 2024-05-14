"use client";

import { Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";
import { ExtraRouteInfo, FormProvider } from "@/pages/create";
import {
    MultiFileField,
    PendingProvider,
    SingleFileField,
    SlugField,
    SubmitButton,
} from "@/shared";
import { action } from "./action";

export function CreateNews() {
    const { register } = useFormContext();

    return (
        <FormProvider action={action}>
            <Heading>Создание новости</Heading>
            <VStack width={"full"}>
                <PendingProvider>
                    <Input {...register("title")} placeholder={"Название"} />
                </PendingProvider>
                <PendingProvider>
                    <Textarea
                        {...register("content")}
                        placeholder={"Контент"}
                        resize={"none"}
                    />
                </PendingProvider>
                <SlugField watchFor={"title"} />
                <SingleFileField
                    name={"previewImage"}
                    accept={"image/*"}
                    label={"Фото для превью"}
                />
                <MultiFileField
                    name={"images"}
                    accept={"image/*"}
                    label={"Фотогалерея"}
                />
                <ExtraRouteInfo />
            </VStack>
            <SubmitButton />
        </FormProvider>
    );
}
