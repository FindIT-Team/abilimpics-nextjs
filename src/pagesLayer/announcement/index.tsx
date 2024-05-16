import { AnnouncementDto } from "@/entities/announcements";
import {
    HStack,
    Heading,
    VStack,
    Text,
    Container,
    Button,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { BiLeftArrowAlt } from "react-icons/bi";

export function Announcement({ init }: { init: unknown }) {
    const the_new = init as AnnouncementDto;

    return (
        <HStack justifyContent={"center"} as={"main"} marginY={10}>
            <VStack spacing={20}>
                <Link
                    href={`/${the_new.competence.competenceCategory.slug}/${the_new.competence.slug}/announcements`}
                >
                    <Button>
                        <BiLeftArrowAlt size="40px" />
                        <Text>
                            Назад к объявлениям "{the_new.competence.title}"
                        </Text>
                    </Button>
                </Link>
                <VStack spacing={8}>
                    <VStack maxWidth={"60%"}>
                        <Heading>{the_new.title}</Heading>
                    </VStack>
                </VStack>
                <Container>
                    <Text>{the_new.content}</Text>
                </Container>
            </VStack>
        </HStack>
    );
}
