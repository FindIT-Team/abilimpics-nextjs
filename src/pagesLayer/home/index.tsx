import { VStack } from "@chakra-ui/react";
import { Announcements } from "@/widgets/announcements";
import { CompetenceCategories } from "@/widgets/competence-categories";
import { Map } from "@/widgets/map";
import { News } from "@/widgets/news";
import { Tasks } from "@/widgets/tasks";
import { SearchCompetence } from "@/features/search-competence";
import { getAllAnnouncements } from "@/entities/announcements";
import { getAllCompetenceCategories } from "@/entities/competence-categories";
import { getAllNews } from "@/entities/news";
import { getAllTasks } from "@/entities/tasks";
import { AddButton, HeadingUpper } from "@/shared";
import { Header } from "./header";

export function Home() {
    return (
        <>
            <VStack spacing={8} id={"competence-categories"}>
                <Header />
                <SearchCompetence />
                <AddButton />
                <CompetenceCategories initPack={getAllCompetenceCategories()} />
            </VStack>
            <VStack spacing={5}>
                <HeadingUpper>Объявления</HeadingUpper>
                <Announcements initPack={getAllAnnouncements()} />
            </VStack>
            <VStack id={"news"} spacing={5}>
                <HeadingUpper>Новости</HeadingUpper>
                <News initPack={getAllNews()} />
            </VStack>
            <VStack id={"tasks"} spacing={5}>
                <HeadingUpper>Основные задачи</HeadingUpper>
                <Tasks initPack={getAllTasks()} />
            </VStack>
            <Map />
        </>
    );
}
