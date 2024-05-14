import { HStack, Text, VStack } from "@chakra-ui/react";
import { Suspense } from "react";
import { Competences } from "@/widgets/competences";
import { CompetenceCategoryDto } from "@/entities/competence-categories";
import { getAllCompetences } from "@/entities/competences";
import { AddButton, HeadingUpper } from "@/shared";

export function CompetenceCategory({ init }: { init: unknown }) {
    const { title, description, slug } = init as CompetenceCategoryDto;

    return (
        <HStack
            justifyContent={"center"}
            as={"main"}
            marginY={10}
            userSelect={"none"}
        >
            <VStack spacing={20}>
                <VStack spacing={8}>
                    <VStack maxWidth={"60%"}>
                        <Suspense>
                            <HeadingUpper>{title}</HeadingUpper>
                            <Text>{description}</Text>
                        </Suspense>
                    </VStack>
                    <AddButton />
                    <Competences initPack={getAllCompetences(slug)} />
                </VStack>
            </VStack>
        </HStack>
    );
}
