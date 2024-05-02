"use client";

import { Link } from "@chakra-ui/next-js";
import { Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";

export function Footer() {
    const isFooterSticky = false;
    // useFooter();

    return (
        <Grid
            as={"footer"}
            placeContent={"center start"}
            padding={8}
            background={"#161b22"}
            gridTemplateColumns={"repeat(3, 1fr)"}
            gap={10}
            position={isFooterSticky ? "fixed" : "static"}
            bottom={isFooterSticky ? 0 : undefined}
            insetX={0}
        >
            <GridItem>
                <VStack>
                    <Text>2024 © Все права защищены</Text>
                    <Link href={"/"}>
                        Политика обработки персональных данных
                    </Link>
                </VStack>
            </GridItem>
            <GridItem>
                <VStack>
                    <VStack alignItems={"start"}>
                        <VStack alignItems={"start"}>
                            <Heading as={"h6"} fontSize={"sm"}>
                                Адрес:
                            </Heading>
                            <Text>г.Москва, Рязанский проспект, дом 7</Text>
                        </VStack>
                        <VStack alignItems={"start"}>
                            <Heading as={"h6"} fontSize={"sm"}>
                                Телефон:
                            </Heading>
                            <Text>+7 (495) 260-52-89</Text>
                        </VStack>
                        <VStack alignItems={"start"}>
                            <Heading as={"h6"} fontSize={"sm"}>
                                E-mail:
                            </Heading>
                            <Text>MosAbl@eduprof.ru</Text>
                        </VStack>
                    </VStack>
                </VStack>
            </GridItem>
            <GridItem>
                <VStack fontWeight={"medium"}>
                    <Link
                        href={"/#competence-categories"}
                        transition={"ease-in-out 150ms"}
                        opacity={0.6}
                        _hover={{ opacity: 1 }}
                    >
                        КОМПЕТЕНЦИИ
                    </Link>
                    <Link
                        href={"/#news"}
                        transition={"ease-in-out 150ms"}
                        opacity={0.6}
                        _hover={{ opacity: 1 }}
                    >
                        НОВОСТИ
                    </Link>
                    <Link
                        href={"/#tasks"}
                        transition={"ease-in-out 150ms"}
                        opacity={0.6}
                        _hover={{ opacity: 1 }}
                    >
                        ОСНОВНЫЕ ЗАДАЧИ
                    </Link>
                    <Link
                        href={"/login"}
                        transition={"ease-in-out 150ms"}
                        opacity={0.6}
                        _hover={{ opacity: 1 }}
                    >
                        ЛИЧНЫЙ КАБИНЕТ
                    </Link>
                </VStack>
            </GridItem>
        </Grid>
    );
}
