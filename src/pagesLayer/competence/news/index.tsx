import { getAllNews } from "@/entities/news";
import { News } from "@/widgets/news";
import { HStack, Heading, VStack } from "@chakra-ui/react";

export function CompetenceNewsList({
    init,
}: {
    init: { competenceCategory: string; competence: string };
}) {
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
                        <Heading>Новости</Heading>
                    </VStack>
                    <VStack spacing={5}>
                        <News
                            initPack={getAllNews(
                                init.competenceCategory,
                                init.competence
                            )}
                        />
                    </VStack>
                </VStack>
            </VStack>
        </HStack>
    );
}
