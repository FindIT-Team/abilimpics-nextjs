"use client";

import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { useFormStatus } from "react-dom";

export function PendingProvider({
    children,
    error,
}: {
    children: ReactNode;
    error?: string;
}) {
    const { pending } = useFormStatus();
    return (
        <FormControl isDisabled={pending} isInvalid={!!error}>
            {children}
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
}
