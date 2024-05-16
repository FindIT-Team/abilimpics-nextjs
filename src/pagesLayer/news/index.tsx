import { Container, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { ArticleImagesCarousel } from "@/widgets/article-images-carousel";
import { NewsDto } from "@/entities/news";

export function News({ init }: { init: unknown }) {
    const { title, content, images, previewImage } = init as NewsDto;
    const srcs = [previewImage, ...images].map(
        ({ webPath }) => `${process.env.NEXT_PUBLIC_STORAGE}/${webPath}`,
    );

    return (
        <HStack justifyContent={"center"} as={"main"} marginY={10}>
            <VStack spacing={20}>
                <VStack spacing={8}>
                    <VStack maxWidth={"60%"}>
                        <Heading>{title}</Heading>
                    </VStack>
                </VStack>
                <ArticleImagesCarousel srcs={srcs} />
                <Container>
                    <Text>{content}</Text>
                </Container>
            </VStack>
        </HStack>
    );
}
