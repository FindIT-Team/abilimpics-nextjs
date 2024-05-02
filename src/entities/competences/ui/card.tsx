import {
    Card,
    CardBody,
    CardHeader,
    Heading,
    Text,
    VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { CompetenceCardDto } from "@/entities/competences";
import { Image } from "@/shared";

export function CompetenceCard({ data }: { data: unknown }) {
    const { title, description, slug, image, competenceCategory } =
        data as CompetenceCardDto;

    return (
        <Link href={`/${competenceCategory.slug}/${slug}`}>
            <Card variant={"rowFreshLight"}>
                <Image
                    src={`${process.env.NEXT_PUBLIC_STORAGE}/${image.webPath}`}
                    alt={""}
                    width={"50px"}
                />
                <VStack
                    alignItems={"stretch"}
                    justifyContent={"center"}
                    width={"full"}
                >
                    <CardHeader>
                        <Heading fontSize={"2xl"} noOfLines={1}>
                            {title}
                        </Heading>
                    </CardHeader>
                    <CardBody>
                        <Text noOfLines={1}>{description}</Text>
                    </CardBody>
                </VStack>
            </Card>
        </Link>
    );
}
