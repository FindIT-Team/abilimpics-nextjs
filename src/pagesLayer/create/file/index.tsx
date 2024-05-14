"use client";

import { Heading, Input, VStack } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { ExtraRouteInfo, FormProvider } from "@/pages/create";
import { PendingProvider, SingleFileField } from "@/shared";
import { action } from "./action";

export function CreateFile() {
    const { register } = useFormContext();

    return (
        <FormProvider action={action}>
            <Heading>Создание файла</Heading>
            <VStack width={"full"}>
                <PendingProvider>
                    <Input {...register("name")} placeholder={"Имя файла"} />
                </PendingProvider>
                <SingleFileField name={"file"} accept={"*/*"} label={"Файл"} />
                <ExtraRouteInfo />
            </VStack>
        </FormProvider>
    );
}
