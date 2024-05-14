import { Heading, HStack, VStack } from "@chakra-ui/react";
import { Announcements } from "@/widgets/announcements";
import { News } from "@/widgets/news";
import { Tasks } from "@/widgets/tasks";
import { getAllAnnouncements } from "@/entities/announcements";
import { CompetenceDto } from "@/entities/competences";
import { getAllFiles } from "@/entities/files";
import { getAllNews } from "@/entities/news";
import { getAllTasks } from "@/entities/tasks";
import { HeadingUpper } from "@/shared";
import { FileGrid } from "./file-grid";

export function Competence({ init }: { init: unknown }) {
    const { title, description, slug, competenceCategory } =
        init as CompetenceDto;

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
                        <Heading>{title}</Heading>
                    </VStack>
                </VStack>
                <VStack spacing={8}>
                    <HeadingUpper>Документация</HeadingUpper>
                    <FileGrid
                        initPack={getAllFiles(competenceCategory.slug, slug)}
                    />
                </VStack>
                <VStack spacing={8}></VStack>
                <VStack spacing={8}></VStack>
                <VStack spacing={8}>
                    <HeadingUpper textTransform={"uppercase"}>
                        Новости
                    </HeadingUpper>
                    <News
                        initPack={getAllNews(competenceCategory.slug, slug)}
                    />
                </VStack>
                <VStack spacing={8}>
                    <HeadingUpper textTransform={"uppercase"}>
                        Объявления
                    </HeadingUpper>
                    <Announcements
                        initPack={getAllAnnouncements(
                            competenceCategory.slug,
                            slug,
                        )}
                    />
                </VStack>
                <VStack spacing={8}>
                    <HeadingUpper textTransform={"uppercase"}>
                        Основные задачи
                    </HeadingUpper>
                    <Tasks
                        initPack={getAllTasks(competenceCategory.slug, slug)}
                    />
                </VStack>
            </VStack>
        </HStack>
    );
}
