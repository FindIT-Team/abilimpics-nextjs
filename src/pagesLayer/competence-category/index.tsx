import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Suspense } from "react";
import { CompetenceCategoryGrid } from "@/pagesLayer/competence-category/grid";
import { CompetenceCategoryDto } from "@/entities/competence-categories";
import { getAllCompetences } from "@/entities/competences";

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
                <VStack maxWidth={"60%"}>
                    <Suspense>
                        <Heading>{title}</Heading>
                        <Text noOfLines={2}>{description}</Text>
                    </Suspense>
                </VStack>
                <CompetenceCategoryGrid
                    slug={slug}
                    initPack={getAllCompetences(slug)}
                />
            </VStack>
        </HStack>
    );
}
