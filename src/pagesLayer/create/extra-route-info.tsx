"use client";

import { Input } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React from "react";
import { useFormContext } from "react-hook-form";

export function ExtraRouteInfo() {
    const { register } = useFormContext();
    const { competenceCategory, competence } = useParams();

    return (
        <>
            <Input
                {...register("competenceCategory")}
                value={competenceCategory}
                display={"none"}
            />
            <Input
                {...register("competence")}
                value={competence}
                display={"none"}
            />
        </>
    );
}
