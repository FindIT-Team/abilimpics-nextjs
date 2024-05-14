"use client";

import { Grid } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { Suspense, useState } from "react";
import { MoreButton } from "@/features/more-button";
import { FileCard, getAllFiles } from "@/entities/files";
import { Packer } from "@/shared";

export function Files({ initPack }: { initPack: Promise<unknown[]> }) {
    const { competenceCategory, competence } = useParams();
    const [packs, setPacks] = useState([initPack]);

    return (
        <>
            <Grid
                width={"full"}
                minWidth={"800px"}
                gridTemplateColumns={"repeat(1, minmax(1fr, 800px)"}
                gridAutoRows={"200px"}
                gap={5}
                padding={5}
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
