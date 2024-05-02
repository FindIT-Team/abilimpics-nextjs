"use client";

import { Button, Input } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { action } from "./action";

export function Create() {
    const form = useForm();
    const { register } = form;

    return (
        <FormProvider {...form}>
            <form action={action}>
                <Input {...register("title")} />
                <Input {...register("description")} />
                <Input {...register("slug")} />
                <Input type={"file"} {...register("image")} />

                <Button type={"submit"}>Submit</Button>
            </form>
        </FormProvider>
    );
}
