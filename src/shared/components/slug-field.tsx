"use client";

import { Button, FormHelperText, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";
import slugTransform from "slug";
import { PendingProvider } from "@/shared";

export function SlugField({ watchFor }: { watchFor: string }) {
    const {
        register,
        formState: { dirtyFields },
        getValues,
        setValue,
        watch,
    } = useFormContext();

    !dirtyFields.slug && setValue("slug", slugTransform(watch(watchFor) ?? ""));

    return (
        <PendingProvider>
            <Input {...register("slug")} placeholder={"Короткая ссылка"} />
            <FormHelperText
                display={dirtyFields.slug ? "flex" : "none"}
                gap={1}
            >
                <Text>Предложения:</Text>
                <Button
                    display={"block"}
                    variant={"ghost"}
                    padding={0}
                    height={"auto"}
                    fontSize={"sm"}
                    color={"#9cb5ff"}
                    _hover={{
                        color: "#3a64e8",
                    }}
                    _active={{ color: "#9cb5ff" }}
                    onClick={() => {
                        setValue(
                            "slug",
                            slugTransform(getValues(watchFor) ?? ""),
                        );
                        (
                            dirtyFields as {
                                slug: boolean;
                            }
                        ).slug = false;
                    }}
                >
                    {slugTransform(watch(watchFor) ?? "")}
                </Button>
            </FormHelperText>
        </PendingProvider>
    );
}
