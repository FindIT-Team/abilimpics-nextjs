"use client";

import { Button, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { FaPlus } from "react-icons/fa";

export function AddButton({ segment }: { segment?: string }) {
    const pathname = usePathname();
    console.log(
        pathname,
        segment,
        segment ? `${pathname}/${segment}/create` : `${pathname}/create`,
    );
    return (
        <Button
            as={NextLink}
            href={
                segment
                    ? `${pathname}/${segment}/create`
                    : `${pathname === "/" ? "" : pathname}/create`
            }
        >
            <Icon as={FaPlus} />
        </Button>
    );
}
