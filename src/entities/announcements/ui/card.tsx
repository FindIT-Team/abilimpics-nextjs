import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useIsRendered } from "@/shared";
import { AnnouncementCardDto } from "../model";

export function AnnouncementCard({ data }: { data: unknown }) {
    const { title, content, createdAt, slug, competence } =
        data as AnnouncementCardDto;

    const isRendered = useIsRendered();
    if (!isRendered) return <></>;

    return (
        <Link
            href={`/${competence.competenceCategory.slug}/${competence.slug}/announcements/${slug}`}
        >
            <Card variant={"fresh"}>
                <CardHeader>
                    <Heading>{title}</Heading>
                    <Heading as={"h5"} fontSize={"md"} opacity={0.5}>
                        {new Intl.DateTimeFormat(navigator.language, {
                            dateStyle: "long",
                            timeStyle: "short",
                        }).format(new Date(createdAt))}
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Text opacity={0.9} noOfLines={10}>
                        {content}
                    </Text>
                </CardBody>
            </Card>
        </Link>
    );
}
