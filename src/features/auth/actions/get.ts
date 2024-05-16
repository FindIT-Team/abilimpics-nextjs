"use server";

import { cookies } from "next/headers";

export async function getUser() {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) return null;

    const dbToken = await prisma.token.findUnique({
        where: { token },
        include: { user: true },
    });

    if (!dbToken) return null;
    else if (dbToken.expiresAt.getTime() < Date.now()) {
        await prisma.token.delete({ where: { token } });
        cookieStore.delete("token");
        return null;
    }

    const { password: _, ...user } = dbToken.user;

    return user;
}
