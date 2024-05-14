import { useParams } from "next/navigation";
import { Suspense } from "react";
import { CompetenceCategoryDto } from "@/entities/competence-categories";
import { getAllCompetences } from "@/entities/competences";
import { AddButton, Heading, HStack, Text, VStack } from "@/shared";
import { Create } from "./create";
import { CompetenceCategoryGrid } from "./grid";

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
                            <Heading>{title}</Heading>
                            <Text noOfLines={2}>{description}</Text>
                        </Suspense>
                    </VStack>
                    <AddButton
                        href={`/${useParams()["competenceCategory"]}/create`}
                    />
                    <Create />
                    <CompetenceCategoryGrid
                        initPack={getAllCompetences(slug)}
                    />
                </VStack>
            </VStack>
        </HStack>
    );
}
