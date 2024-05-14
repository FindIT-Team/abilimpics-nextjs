"use client";

import { Grid } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React, { Suspense, useState } from "react";
import { MoreButton } from "@/features/more-button";
import { AnnouncementCard } from "@/entities/announcements";
import { getAllAnnouncements } from "@/entities/announcements/queries";
import { Packer } from "@/shared";

export function Announcements({ initPack }: { initPack: Promise<unknown[]> }) {
    const { competence, competenceCategory } = useParams();
    const [packs, setPacks] = useState([initPack]);

    return (
        <>
            <Grid
                gridTemplateColumns={"repeat(3, 350px)"}
                gridAutoRows={"400px"}
                width={"full"}
                gap={5}
                padding={5}
                placeContent={"center center"}
            >
                {packs.map((pack, index) => (
                    <Suspense key={index}>
                        <Packer
                            Delegate={AnnouncementCard}
                            packPromise={pack}
                        />
                    </Suspense>
                ))}
            </Grid>
            <MoreButton
                packs={packs}
                setPacks={setPacks}
                fetchFunc={(offset) =>
                    getAllAnnouncements(
                        competenceCategory as string,
                        competence as string,
                        offset,
                    )
                }
            />
        </>
    );
}
