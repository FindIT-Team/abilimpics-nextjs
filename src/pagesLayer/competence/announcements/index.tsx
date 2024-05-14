import { getAllAnnouncements } from "@/entities/announcements";
import { Announcements } from "@/widgets/announcements";
import { HStack, Heading, VStack } from "@chakra-ui/react";

export function CompetenceAnnouncementsList({
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
                        <Heading>Объявления</Heading>
                    </VStack>
                    <VStack spacing={5}>
                        <Announcements
                            initPack={getAllAnnouncements(
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
