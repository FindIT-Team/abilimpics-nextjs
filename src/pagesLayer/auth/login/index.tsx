"use client";

import { Link } from "@chakra-ui/next-js";
import { Button, Heading, Input, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/features/auth";
import { PendingProvider, SubmitButton } from "@/shared";

export function Login() {
    const {
        register,
        formState: { errors, dirtyFields },
    } = useForm<LoginSchema>();

    const fields = ["email", "password"];

    const isDisabled =
        Object.entries(errors).some(([, value]) => value) ||
        !fields.every((field) => field in dirtyFields);

    return (
        <>
            <Heading textAlign={"center"}>
                Добро пожаловать в цифровую платформу всероссийских чемпионатных
                движения
                <br />
                &quot;Абилимпикс Москва&quot;
            </Heading>
            <VStack width={"full"}>
                <PendingProvider error={errors.email?.message}>
                    <Input
                        variant={"filled"}
                        placeholder={"Почта"}
                        {...register("email")}
                    />
                </PendingProvider>
                <PendingProvider error={errors.password?.message}>
                    <Input
                        variant={"filled"}
                        placeholder={"Пароль"}
                        type={"password"}
                        {...register("password")}
                    />
                </PendingProvider>
                <Link href={"/forgot-password"} alignSelf={"end"}>
                    Забыли пароль?
                </Link>
            </VStack>
            <VStack>
                <SubmitButton label={"Войти"} isDisabled={isDisabled} />
                <Button
                    as={NextLink}
                    href={`/auth/registration`}
                    variant={"ghost"}
                    color={"whiteAlpha.700"}
                    _hover={{ color: "whiteAlpha.900" }}
                    _active={{ color: "whiteAlpha.700" }}
                    padding={0}
                >
                    Регистрация
                </Button>
            </VStack>
        </>
    );
}
