"use server";

import * as bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { loginSchema, LoginSchema } from "@/features/auth";

export async function loginUser(formData: FormData) {
    const data = Object.fromEntries(formData.entries()) as LoginSchema;

    const check = loginSchema.safeParse(data);
    if (!check.success)
        return {
            errors: check.error.flatten().fieldErrors,
        };

    const { email, password } = data;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) return null;

    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365); // 1 year

    const token = await prisma.token.create({
        data: {
            expiresAt,
            user: {
                connect: { id: user.id },
            },
        },
    });

    const cookieStore = cookies();
    cookieStore.set("token", token.token, {
        expires: expiresAt,
    });
}
