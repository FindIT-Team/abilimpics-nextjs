"use client";

import { chakra, Heading as ChakraHeading } from "@chakra-ui/react";

export const Heading = chakra(ChakraHeading, {
    baseStyle: { textTransform: "uppercase" },
});
