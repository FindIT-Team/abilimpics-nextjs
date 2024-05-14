import { Grid, VStack } from "@chakra-ui/react";
import { HeadingUpper, Image } from "@/shared";

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
                <HeadingUpper>Компетенции Абилимпикс</HeadingUpper>
                <HeadingUpper>Москва</HeadingUpper>
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
