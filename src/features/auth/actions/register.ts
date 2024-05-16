"use server";

import * as bcrypt from "bcrypt";
import { registerSchema, RegisterSchema } from "@/features/auth";

export async function registerUser(formData: FormData) {
    let data = {
        ...Object.fromEntries(formData.entries()),
        consent: formData.get("consent") === "on",
    } as RegisterSchema;

    const check = registerSchema.safeParse(data);
    if (!check.success)
        return {
            errors: check.error.flatten().fieldErrors,
        };

    const { firstName, lastName, patronymic, email, password } = data;

    const user = await prisma.user.findUnique({ where: { email } });

    if (user)
        return {
            errors: {
                email: ["Email already in use"],
            },
        };

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
        data: {
            firstName,
            lastName,
            patronymic,
            email,
            password: hashedPassword,
        },
    });

    return { message: "OK" };
}
