"use client";

import { Link } from "@chakra-ui/next-js";
import { Button, Icon } from "@chakra-ui/react";
import React from "react";
import { FaPlus } from "react-icons/fa";

export function Create() {
    return (
        <Button as={Link} href={"/create"}>
            <Icon as={FaPlus} />
        </Button>
    );
}
