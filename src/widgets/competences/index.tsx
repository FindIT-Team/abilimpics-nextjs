"use client";

import { Grid } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { Suspense, useState } from "react";
import { MoreButton } from "@/features/more-button";
import { CompetenceCard, getAllCompetences } from "@/entities/competences";
import { Packer } from "@/shared";

export function Competences({ initPack }: { initPack: Promise<unknown[]> }) {
    const { competenceCategory } = useParams();
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
                fetchFunc={(offset?: string) =>
                    getAllCompetences(competenceCategory as string, offset)
                }
            />
        </>
    );
}
