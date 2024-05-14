"use client";

import { Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React from "react";
import { useFormContext } from "react-hook-form";
import { FormProvider } from "@/pages/create";
import {
    PendingProvider,
    SingleFileField,
    SlugField,
    SubmitButton,
} from "@/shared";
import { competenceCreate } from "./competence";
import { competenceCategoryCreate } from "./competence-category";

export function CreateCompetence() {
    const { competenceCategory } = useParams();

    const { register } = useFormContext();

    return (
        <FormProvider
            action={
                competenceCategory ? competenceCreate : competenceCategoryCreate
            }
        >
            <Heading>
                {competenceCategory
                    ? "Создание компетенции"
                    : "Создание категории компетенции"}
            </Heading>
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
                    label={"Фото для превью"}
                />
                {competenceCategory && (
                    <Input
                        {...register("competenceCategory")}
                        value={competenceCategory}
                        display={"none"}
                    />
                )}
            </VStack>

            <SubmitButton />
        </FormProvider>
    );
}
