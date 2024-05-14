import { Grid, VStack } from "@chakra-ui/react";
import { Image } from "@/shared";
import { Heading } from "./heading";

export function Header() {
    return (
        <Grid
            gridTemplateColumns={"repeat(3, 1fr)"}
            alignItems={"center"}
            gap={12}
        >
            <Image
                src={"/logo.webp"}
                alt={""}
                height={"140px"}
                justifySelf={"end"}
            />
            <VStack textAlign={"center"}>
                <Heading>Компетенции Абилимпикс</Heading>
                <Heading>Москва</Heading>
            </VStack>
            <Image
                src={"/emblem.webp"}
                alt={""}
                height={"140px"}
                justifySelf={"start"}
            />
        </Grid>
    );
}
