"use client";

import { Box, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

export function ArticleImagesCarousel({ srcs }: { srcs: string[] }) {
    const [page, setPage] = useState(0);

    function slide(n = 1) {
        setPage((p) => {
            let np = p + n;
            if (np < 0) np = srcs.length - 1;
            if (np >= srcs.length) np = 0;
            return np;
        });
    }

    return (
        <Box
            position={"relative"}
            height={"300px"}
            width={"full"}
            overflow={"hidden"}
            rounded={"16px"}
        >
            <IconButton
                aria-label="Влево"
                variant="ghost"
                position="absolute"
                left={"40px"}
                top={"50%"}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slide()}
            >
                <BiLeftArrowAlt size="40px" />
            </IconButton>
            <IconButton
                aria-label="Вправо"
                variant="ghost"
                position="absolute"
                right={"40px"}
                top={"50%"}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slide(-1)}
            >
                <BiRightArrowAlt size="40px" />
            </IconButton>
            <Box
                height={"100%"}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${srcs[page]})`}
            />
        </Box>
    );
}
