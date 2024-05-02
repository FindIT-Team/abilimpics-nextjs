import {
    Box,
    Card,
    CardBody,
    CardHeader,
    GridItem,
    Heading,
    Skeleton,
    SkeletonText,
    VStack,
} from "@chakra-ui/react";

export function CompetenceCategoryCardSkeleton() {
    return (
        <GridItem role={"group"}>
            <Card variant={"freshLight"}>
                <CardHeader>
                    <VStack spacing={8}>
                        <Skeleton>
                            <Box width={"130px"} height={"110px"} />
                        </Skeleton>
                        <Skeleton>
                            <Heading
                                textAlign={"center"}
                                textTransform={"uppercase"}
                                fontSize={"2xl"}
                                paddingTop={2}
                            >
                                null null null
                            </Heading>
                        </Skeleton>
                    </VStack>
                </CardHeader>
                <CardBody>
                    <SkeletonText
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        spacing={2}
                        skeletonHeight={4}
                        noOfLines={6}
                    />
                </CardBody>
            </Card>
        </GridItem>
    );
}
