import { NewsDto } from "@/entities/news";
import { ArticleImagesCarousel } from "@/widgets/article-images-carousel";
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

export function New({ init }: { init: unknown }) {
    const the_new = init as NewsDto;
    const srcs = [the_new.previewImage, ...the_new.images].map(
        (i) => `${process.env.NEXT_PUBLIC_STORAGE}/${i.webPath}`
    );

    return (
        <HStack justifyContent={"center"} as={"main"} marginY={10}>
            <VStack spacing={20}>
                <Link
                    href={`/${the_new.competence.competenceCategory.slug}/${the_new.competence.slug}/news`}
                >
                    <Button>
                        <BiLeftArrowAlt size="40px" />
                        <Text>
                            Назад к новостям "{the_new.competence.title}"
                        </Text>
                    </Button>
                </Link>
                <VStack spacing={8}>
                    <VStack maxWidth={"60%"}>
                        <Heading>{the_new.title}</Heading>
                    </VStack>
                </VStack>
                <ArticleImagesCarousel srcs={srcs} />
                <Container>
                    <Text>{the_new.content}</Text>
                </Container>
            </VStack>
        </HStack>
    );
}
