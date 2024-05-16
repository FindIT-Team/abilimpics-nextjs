"use client";

import { Button, Spinner } from "@chakra-ui/react";
import React from "react";
import { useFormStatus } from "react-dom";

export function SubmitButton({
    label,
    isDisabled = false,
}: {
    label: string;
    isDisabled?: boolean;
}) {
    const { pending } = useFormStatus();

    return (
        <Button
            type={"submit"}
            colorScheme={"blue"}
            width={"full"}
            isDisabled={pending || isDisabled}
        >
            {pending ? <Spinner /> : label}
        </Button>
    );
}
