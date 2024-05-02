import {
    Card,
    CardBody,
    CardHeader,
    Heading,
    Text,
    VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { CompetenceCategoryCardDto } from "@/entities/competence-categories";
import { Image } from "@/shared";

export function CompetenceCategoryCard({ data }: { data: unknown }) {
    const { title, description, slug, image } =
        data as CompetenceCategoryCardDto;

    return (
        <Link href={`/${slug}`}>
            <Card variant={"freshLight"}>
                <CardHeader>
                    <VStack spacing={8}>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_STORAGE}/${image.webPath}`}
                            alt={""}
                            height={"110px"}
                        />
                        <Heading
                            textAlign={"center"}
                            textTransform={"uppercase"}
                            fontSize={"2xl"}
                            paddingTop={2}
                        >
                            {title}
                        </Heading>
                    </VStack>
                </CardHeader>
                <CardBody>
                    <Text
                        textAlign={"center"}
                        opacity={0.7}
                        fontWeight={"medium"}
                        noOfLines={6}
                    >
                        {description}
                    </Text>
                </CardBody>
            </Card>
        </Link>
    );
}
