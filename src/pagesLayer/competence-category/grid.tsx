"use client";

import { Grid } from "@chakra-ui/react";
import { Suspense, useState } from "react";
import { MoreButton } from "@/features/more-button";
import { CompetenceCard } from "@/entities/competences";
import { getAllCompetences } from "@/entities/competences/queries";
import { Packer } from "@/shared";

export function CompetenceCategoryGrid({
    slug,
    initPack,
}: {
    slug: string;
    initPack: Promise<unknown[]>;
}) {
    const [packs, setPacks] = useState([initPack]);
    return (
        <>
            <Grid
                gap={5}
                padding={5}
                gridAutoColumns={"1000px"}
                placeContent={"center center"}
            >
                {packs.map((pack, index) => (
                    <Suspense
                        key={index}
                        fallback={
                            <>
                                {Array(6)
                                    .fill(null)
                                    .map((_, index) => (
                                        <div key={index}>loading..</div>
                                        // <CompetenceCardSkeleton key={index} />
                                    ))}
                            </>
                        }
                    >
                        <Packer Delegate={CompetenceCard} packPromise={pack} />
                    </Suspense>
                ))}
            </Grid>
            <MoreButton
                packs={packs}
                setPacks={setPacks}
                fetchFunc={(offset?: string) => getAllCompetences(slug, offset)}
            />
        </>
    );
}
