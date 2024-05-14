"use client";

import { Button, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaPlus } from "react-icons/fa";

export function Create() {
    const { competenceCategory } = useParams();

    return (
        <Button as={Link} href={`/${competenceCategory}/create`}>
            <Icon as={FaPlus} />
        </Button>
    );
}
