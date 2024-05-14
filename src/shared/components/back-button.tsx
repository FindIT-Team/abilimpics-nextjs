"use client";

import { Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { useParams, usePathname } from "next/navigation";

export function BackButton() {
    const { competence, competenceCategory } = useParams();
    const pathname = usePathname();

    const path = [
        competenceCategory && pathname.endsWith(competenceCategory as string)
            ? undefined
            : competenceCategory,
        competence && pathname.endsWith(competence as string)
            ? undefined
            : competence,
    ].join("/");

    return (
        <Button
            as={NextLink}
            href={`/${path}`}
            variant={"ghost"}
            color={"whiteAlpha.700"}
            _hover={{ color: "whiteAlpha.900" }}
            _active={{ color: "whiteAlpha.700" }}
            padding={0}
        >
            Назад
        </Button>
    );
}
