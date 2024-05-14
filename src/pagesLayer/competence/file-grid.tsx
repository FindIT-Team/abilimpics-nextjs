"use client";

import { Grid } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { Suspense, useState } from "react";
import { MoreButton } from "@/features/more-button";
import { FileCard, getAllFiles } from "@/entities/files";
import { Packer } from "@/shared";

export function FileGrid({ initPack }: { initPack: Promise<unknown[]> }) {
    // TODO: IT'S WIDGET
    const { competenceCategory, competence } = useParams();
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
                                        // <FileCardSkeleton key={index} />
                                    ))}
                            </>
                        }
                    >
                        <Packer Delegate={FileCard} packPromise={pack} />
                    </Suspense>
                ))}
            </Grid>
            <MoreButton
                packs={packs}
                setPacks={setPacks}
                fetchFunc={(offset?: string) =>
                    getAllFiles(
                        competenceCategory as string,
                        competence as string,
                        offset,
                    )
                }
            />
        </>
    );
}
