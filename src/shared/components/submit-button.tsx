"use client";

import { Button, Spinner } from "@chakra-ui/react";
import React from "react";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type={"submit"}
            colorScheme={"blue"}
            width={"full"}
            isDisabled={pending}
        >
            {pending ? <Spinner /> : "Создать"}
        </Button>
    );
}
