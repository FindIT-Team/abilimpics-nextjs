import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { Announcements } from "@/widgets/announcements";
import { CompetenceCategories } from "@/widgets/competence-categories";
import { Map } from "@/widgets/map";
import { News } from "@/widgets/news";
import { Tasks } from "@/widgets/tasks";
import { SearchCompetence } from "@/features/search-competence";
import { getAllAnnouncements } from "@/entities/announcements/queries";
import { getAllCompetenceCategories } from "@/entities/competence-categories/queries";
import { getAllNews } from "@/entities/news/queries";
import { getAllTasks } from "@/entities/tasks/queries";
import { Create } from "./create";
import { Header } from "./header";
import { Heading } from "./heading";

export function Home() {
    return (
        <HStack
            justifyContent={"center"}
            as={"main"}
            marginY={10}
            userSelect={"none"}
        >
            <title>Абилимпикс - Москва</title>
            <VStack spacing={20}>
                <VStack spacing={8} id={"competence-categories"}>
                    <Header />
                    <SearchCompetence />
                    <Create />
                    <CompetenceCategories
                        initPack={getAllCompetenceCategories()}
                    />
                </VStack>
                <VStack spacing={5}>
                    <Heading>Объявления</Heading>
                    <Announcements initPack={getAllAnnouncements()} />
                </VStack>
                <VStack id={"news"} spacing={5}>
                    <Heading>Новости</Heading>
                    <News initPack={getAllNews()} />
                </VStack>
                <VStack id={"tasks"} spacing={5}>
                    <Heading>Основные задачи</Heading>
                    <Tasks initPack={getAllTasks()} />
                </VStack>
                <Map />
            </VStack>
        </HStack>
    );
}
