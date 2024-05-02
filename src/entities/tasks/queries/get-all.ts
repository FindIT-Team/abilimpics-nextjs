"use server";

import { cache } from "react";
import { prisma } from "@/shared";

export const getAllTasks = cache(async function (offset?: string) {
    return prisma.task.findMany({
        cursor: offset
            ? {
                  id: offset,
              }
            : undefined,
        take: 6,
        skip: offset ? 1 : 0,
    });
});
