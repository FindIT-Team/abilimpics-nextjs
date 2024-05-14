import { PrismaClient } from "@prisma/client";

class Prisma {
    private static instance: PrismaClient;

    public static getInstance(): PrismaClient {
        if (!Prisma.instance) {
            Prisma.instance = new PrismaClient();
        }

        return Prisma.instance;
    }
}

export const prisma = Prisma.getInstance();
