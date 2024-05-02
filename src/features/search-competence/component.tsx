"use client";

import {
    Button,
    Flex,
    HStack,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    StackDivider,
    Text,
    VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { ChangeEvent, useRef, useState } from "react";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";
import { Hint } from "@/features/search-competence/hint";
import { searchCompetences } from "@/features/search-competence/search";

export function SearchCompetence() {
    const [hints, setHints] = useState<Hint[]>([]);
    const [isHintsVisible, setIsHintsVisible] = useState(false);
    const [isHintsMounted, setIsHintsMounted] = useState(false);

    const timeoutRef = useRef<any>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            searchCompetences(e.target?.value ?? "").then((hints) => {
                setHints((_) => hints);
            });
        }, 500);
    }

    return (
        <Flex width={"40%"} position={"relative"}>
            <InputGroup variant={"search"} size={"lg"}>
                <InputLeftElement>
                    <Icon as={RiSearchLine} />
                </InputLeftElement>
                <Input
                    ref={inputRef}
                    placeholder={"Поиск компетенции"}
                    onChange={handleChange}
                    onFocus={() => setIsHintsVisible((_) => true)}
                    onBlur={() => setIsHintsVisible((_) => false)}
                />
                <InputRightElement>
                    <Button
                        variant={"ghost"}
                        padding={1.5}
                        borderRadius={"full"}
                        onClick={() => {
                            if (inputRef.current) inputRef.current.value = "";
                            setHints((_) => []);
                            inputRef.current?.focus();
                        }}
                    >
                        <Icon as={RiCloseLine} />
                    </Button>
                </InputRightElement>
            </InputGroup>
            <VStack
                position={"absolute"}
                zIndex={9999}
                top={16}
                width={"full"}
                alignItems={"stretch"}
                spacing={0}
                divider={<StackDivider borderColor={"#1e1e1e"} />}
                maxHeight={300}
                borderRadius={"lg"}
                border={"1px solid #20252c"}
                overflowY={"scroll"}
                transition={"opacity ease 250ms"}
                opacity={isHintsVisible ? 1 : 0}
                onTransitionEnd={() => setIsHintsMounted((_) => isHintsVisible)}
                visibility={
                    (isHintsMounted || isHintsVisible) && hints.length > 0
                        ? "visible"
                        : "hidden"
                }
                background={"#14141e"}
            >
                {hints.map(({ title, slug }, index) => (
                    <HStack
                        as={Link}
                        href={slug}
                        key={index}
                        paddingX={12}
                        paddingY={1.5}
                        transition={"background ease 250ms"}
                        _hover={{ background: "#2b3138" }}
                    >
                        <Text
                            noOfLines={1}
                            fontSize={"lg"}
                            fontWeight={"medium"}
                        >
                            {title}
                        </Text>
                    </HStack>
                ))}
            </VStack>
        </Flex>
    );
}
