import {
    Card,
    CardBody,
    CardHeader,
    Heading,
    Text,
    VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { TaskCardDto } from "@/entities/tasks";
import { Image } from "@/shared";

export function TaskCard({ data }: { data: unknown }) {
    const { title, description, slug, competence, image } = data as TaskCardDto;

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
