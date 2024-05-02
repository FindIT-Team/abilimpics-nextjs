"use client";

import { Button, Icon } from "@chakra-ui/react";
import { useRef } from "react";
import { RiArrowUpLine } from "react-icons/ri";
import { useBackToTop } from "./index";

export function BackToTop() {
    const ref = useRef<HTMLButtonElement>(null);
    useBackToTop(ref);
    return (
        <Button
            ref={ref}
            position={"fixed"}
            bottom={4}
            right={4}
            boxSize={12}
            padding={3}
            borderRadius={"full"}
            background={"gray.700"}
            _hover={{ background: "gray.800" }}
            display={"none"}
            zIndex={9999}
            onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
        >
            <Icon as={RiArrowUpLine} boxSize={"full"} />
        </Button>
    );
}
