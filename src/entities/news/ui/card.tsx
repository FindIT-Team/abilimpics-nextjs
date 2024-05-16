import {
    Card,
    CardBody,
    CardHeader,
    Heading,
    Text,
    VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Image } from "@/shared";
import { NewsCardDto } from "../index";

export function NewsCard({ data }: { data: unknown }) {
    const { title, content, previewImage, competence, slug } =
        data as NewsCardDto;

    return (
        <Link
            href={`/${competence.competenceCategory.slug}/${competence.slug}/news/${slug}`}
        >
            <Card variant={"rowFresh"} maxWidth={"800px"} p={8} gap={8}>
                <Image
                    src={`${process.env.NEXT_PUBLIC_STORAGE}/${previewImage.webPath}`}
                    alt={""}
                />
                <VStack
                    flexGrow={1}
                    alignItems={"stretch"}
                    justifyContent={"center"}
                >
                    <CardHeader padding={0}>
                        <Heading fontSize={"2xl"} noOfLines={1}>
                            {title}
                        </Heading>
                    </CardHeader>
                    <CardBody padding={0}>
                        <Text fontSize={"lg"} noOfLines={4} opacity={0.8}>
                            {content}
                        </Text>
                    </CardBody>
                </VStack>
            </Card>
        </Link>
    );
}
