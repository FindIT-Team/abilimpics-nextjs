import { Heading, VStack } from "@chakra-ui/react";
import { Announcements } from "@/widgets/announcements";
import { Files } from "@/widgets/files";
import { News } from "@/widgets/news";
import { Tasks } from "@/widgets/tasks";
import { getAllAnnouncements } from "@/entities/announcements";
import { CompetenceDto } from "@/entities/competences";
import { getAllFiles } from "@/entities/files";
import { getAllNews } from "@/entities/news";
import { getAllTasks } from "@/entities/tasks";
import { AddButton, HeadingUpper } from "@/shared";
import { RoleRestricted } from "@/shared/components/role-restricted";

export function Competence({ init }: { init: unknown }) {
    const { title, slug, competenceCategory } = init as CompetenceDto;

    const wrapper = (func: (a: string, b: string) => Promise<unknown[]>) =>
        func(competenceCategory.slug, slug);
    const initFiles = wrapper(getAllFiles);
    const initNews = wrapper(getAllNews);
    const initTasks = wrapper(getAllTasks);
    const initAnnouncements = wrapper(getAllAnnouncements);

    return (
        <>
            <VStack spacing={8}>
                <VStack maxWidth={"60%"}>
                    <Heading>{title}</Heading>
                </VStack>
            </VStack>
            <VStack spacing={8}>
                <HeadingUpper>Документация</HeadingUpper>
                <RoleRestricted role={["ADMIN", slug]}>
                    <AddButton segment={"files"} />
                </RoleRestricted>
                <Files initPack={initFiles} />
            </VStack>
            <VStack spacing={8}>
                <HeadingUpper>Вопросы</HeadingUpper>
            </VStack>
            <VStack spacing={8}></VStack>
            <VStack spacing={8}>
                <HeadingUpper>Новости</HeadingUpper>
                <RoleRestricted role={["ADMIN", slug]}>
                    <AddButton segment={"news"} />
                </RoleRestricted>
                <News initPack={initNews} />
            </VStack>
            <VStack spacing={8}>
                <HeadingUpper>Объявления</HeadingUpper>
                <RoleRestricted role={["ADMIN", slug]}>
                    <AddButton segment={"announcements"} />
                </RoleRestricted>
                <Announcements initPack={initAnnouncements} />
            </VStack>
            <VStack spacing={8}>
                <HeadingUpper>Основные задачи</HeadingUpper>
                <RoleRestricted role={["ADMIN", slug]}>
                    <AddButton segment={"tasks"} />
                </RoleRestricted>
                <Tasks initPack={initTasks} />
            </VStack>
        </>
    );
}
