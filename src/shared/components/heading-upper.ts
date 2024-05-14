"use client";

import { chakra, Heading as ChakraHeading } from "@chakra-ui/react";

export const HeadingUpper = chakra(ChakraHeading, {
    baseStyle: { textTransform: "uppercase" },
});
