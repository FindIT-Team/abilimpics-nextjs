import {
    Card,
    CardBody,
    CardHeader,
    chakra,
    Heading,
    HStack,
    Text,
    VStack,
} from "@chakra-ui/react";
import { FileCardDto } from "@/entities/files";
import { Image } from "@/shared";

export function FileCard({ data }: { data: unknown }) {
    const { name, type, size, webPath } = data as FileCardDto;

    return (
        <chakra.a href={`${process.env.NEXT_PUBLIC_STORAGE}/${webPath}`}>
            <Card variant={"rowFresh"} maxWidth={"800px"} p={8} gap={8}>
                <Image src={""} />
                <VStack
                    flexGrow={1}
                    alignItems={"stretch"}
                    justifyContent={"center"}
                >
                    <CardHeader padding={0}>
                        <Heading fontSize={"2xl"} noOfLines={1}>
                            {name}
                        </Heading>
                    </CardHeader>
                    <CardBody padding={0}>
                        <HStack opacity={0.8} fontSize={"lg"} spacing={5}>
                            <Text>
                                {webPath
                                    .slice(webPath.lastIndexOf("."))
                                    .slice(1)}
                            </Text>
                            <Text>{size}</Text>
                        </HStack>
                    </CardBody>
                </VStack>
            </Card>
        </chakra.a>
    );
}
