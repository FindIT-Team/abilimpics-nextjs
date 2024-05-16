"use client";

import { Grid } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { Suspense, useState } from "react";
import { MoreButton } from "@/features/more-button";
import { TaskCard } from "@/entities/tasks";
import { getAllTasks } from "@/entities/tasks/queries";
import { Packer } from "@/shared";

export function Tasks({ initPack }: { initPack: Promise<unknown[]> }) {
    const { competence, competenceCategory } = useParams();
    const [packs, setPacks] = useState([initPack]);

    return (
        <>
            <Grid
                gridTemplateColumns={"repeat(3, 350px)"}
                gridAutoRows={"400px"}
                gap={5}
                padding={5}
                placeContent={"center center"}
            >
                {packs.map((pack, index) => (
                    <Suspense key={index}>
                        <Packer Delegate={TaskCard} packPromise={pack} />
                    </Suspense>
                ))}
            </Grid>
            <MoreButton
                packs={packs}
                setPacks={setPacks}
                fetchFunc={(offset) =>
                    getAllTasks(
                        competenceCategory as string,
                        competence as string,
                        offset,
                    )
                }
            />
        </>
    );
}
