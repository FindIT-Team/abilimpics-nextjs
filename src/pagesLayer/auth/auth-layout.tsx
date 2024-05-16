"use client";

import { FormProvider } from "@/pages/auth/form-provider";
import { Login } from "@/pages/auth/login";
import { Registration } from "@/pages/auth/registration";
import { loginUser } from "@/features/auth/actions/login";
import { registerUser } from "@/features/auth/actions/register";
import { loginSchema } from "@/features/auth/schemas/login-schema";
import { registerSchema } from "@/features/auth/schemas/register-schema";

export function AuthLayout({ choice }: { choice: "register" | "login" }) {
    if (choice === "register")
        return (
            <FormProvider action={registerUser} schema={registerSchema}>
                <Registration />
            </FormProvider>
        );
    else
        return (
            <FormProvider action={loginUser} schema={loginSchema}>
                <Login />
            </FormProvider>
        );
}
