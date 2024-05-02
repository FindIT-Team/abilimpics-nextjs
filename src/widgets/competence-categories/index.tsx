"use client";

import { Grid } from "@chakra-ui/react";
import { Suspense, useState } from "react";
import { MoreButton } from "@/features/more-button";
import {
    CompetenceCategoryCard,
    CompetenceCategoryCardSkeleton,
} from "@/entities/competence-categories";
import { getAllCompetenceCategories } from "@/entities/competence-categories/queries";
import { Packer } from "@/shared";

export function CompetenceCategories({
    initPack,
}: {
    initPack: Promise<unknown[]>;
}) {
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
                    <Suspense
                        key={index}
                        fallback={
                            <>
                                {Array(6)
                                    .fill(null)
                                    .map((_, index) => (
                                        <CompetenceCategoryCardSkeleton
                                            key={index}
                                        />
                                    ))}
                            </>
                        }
                    >
                        <Packer
                            Delegate={CompetenceCategoryCard}
                            packPromise={pack}
                        />
                    </Suspense>
                ))}
            </Grid>
            <MoreButton
                packs={packs}
                setPacks={setPacks}
                fetchFunc={getAllCompetenceCategories}
            />
        </>
    );
}
