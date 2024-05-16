import { Heading, Text, VStack } from "@chakra-ui/react";
import { AnnouncementDto } from "@/entities/announcements";

export function Announcement({ init }: { init: unknown }) {
    const { title, content } = init as AnnouncementDto;

    return (
        <>
            <VStack spacing={8}>
                <VStack maxWidth={"60%"}>
                    <Heading textAlign={"center"}>{title}</Heading>
                    <Text opacity={0.8}>{content}</Text>
                </VStack>
            </VStack>
        </>
    );
}
