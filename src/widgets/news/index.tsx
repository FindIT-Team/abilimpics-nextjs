"use client";

import { Grid } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React, { Suspense, useState } from "react";
import { MoreButton } from "@/features/more-button";
import { NewsCard } from "@/entities/news";
import { getAllNews } from "@/entities/news/queries";
import { Packer } from "@/shared";

export function News({ initPack }: { initPack: Promise<unknown[]> }) {
    const [packs, setPacks] = useState([initPack]);
    const { competence, competenceCategory } = useParams();

    return (
        <>
            <Grid
                width={"full"}
                gridTemplateColumns={"repeat(1, 1fr)"}
                gridAutoRows={"200px"}
                gap={5}
                padding={5}
                placeContent={"center center"}
            >
                {packs.map((pack, index) => (
                    <Suspense key={index}>
                        <Packer Delegate={NewsCard} packPromise={pack} />
                    </Suspense>
                ))}
            </Grid>
            <MoreButton
                packs={packs}
                setPacks={setPacks}
                fetchFunc={(offset) =>
                    getAllNews(
                        offset,
                        competence as string,
                        competenceCategory as string,
                    )
                }
            />
        </>
    );
}
