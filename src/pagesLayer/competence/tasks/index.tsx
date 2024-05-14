import { getAllTasks } from "@/entities/tasks";
import { Tasks } from "@/widgets/tasks";
import { HStack, Heading, VStack } from "@chakra-ui/react";

export function CompetenceTasksList({
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
                        <Heading>Задачи</Heading>
                    </VStack>
                    <VStack spacing={5}>
                        <Tasks
                            initPack={getAllTasks(
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
