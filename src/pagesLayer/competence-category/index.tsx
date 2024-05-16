import { Text, VStack } from "@chakra-ui/react";
import { Suspense } from "react";
import { Competences } from "@/widgets/competences";
import { CompetenceCategoryDto } from "@/entities/competence-categories";
import { getAllCompetences } from "@/entities/competences";
import { AddButton, HeadingUpper } from "@/shared";

export function CompetenceCategory({ init }: { init: unknown }) {
    const { title, description, slug } = init as CompetenceCategoryDto;

    return (
        <>
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
        </>
    );
}
