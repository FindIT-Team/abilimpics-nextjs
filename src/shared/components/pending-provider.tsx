"use client";

import { FormControl } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { useFormStatus } from "react-dom";

export function PendingProvider({ children }: { children: ReactNode }) {
    const { pending } = useFormStatus();
    return <FormControl isDisabled={pending}>{children}</FormControl>;
}
