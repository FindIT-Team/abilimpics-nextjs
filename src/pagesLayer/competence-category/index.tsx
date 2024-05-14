import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { Suspense } from "react";
import { Competences } from "@/widgets/competences";
import { CompetenceCategoryDto } from "@/entities/competence-categories";
import { getAllCompetences } from "@/entities/competences";
import { AddButton, BackButton, HeadingUpper } from "@/shared";

export function CompetenceCategory({ init }: { init: unknown }) {
    const { title, description, slug } = init as CompetenceCategoryDto;

    return (
        <HStack
            justifyContent={"center"}
            as={"main"}
            marginY={10}
            userSelect={"none"}
            position={"relative"}
        >
            <Box position={"absolute"} alignSelf={"start"} right={"20%"}>
                <BackButton />
            </Box>
            <VStack spacing={20}>
                <VStack spacing={8}>
                    <VStack maxWidth={"60%"}>
                        <Suspense>
                            <HeadingUpper>{title}</HeadingUpper>
                            <Text opacity={0.8}>{description}</Text>
                        </Suspense>
                    </VStack>
                    <AddButton />
                    <Competences initPack={getAllCompetences(slug)} />
                </VStack>
            </VStack>
        </HStack>
    );
}
