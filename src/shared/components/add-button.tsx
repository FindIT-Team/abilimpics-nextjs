"use client";

import { Button, FaPlus, Icon, NextLink } from "@/shared";

export function AddButton({ href }: { href: string }) {
    return (
        <Button as={NextLink} href={href}>
            <Icon as={FaPlus} />
        </Button>
    );
}
