"use client";

import { Link } from "@chakra-ui/next-js";
import { Button, Checkbox, Heading, Input, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { useFormContext } from "react-hook-form";
import { RegisterSchema } from "@/features/auth";
import { PendingProvider, SubmitButton } from "@/shared";

export function Registration() {
    const { register, formState } = useFormContext<RegisterSchema>();

    const fields = [
        "firstName",
        "lastName",
        "patronymic",
        "email",
        "password",
        "confirm",
        "consent",
    ];

    const { errors, dirtyFields } = formState;
    const isDisabled =
        Object.entries(errors).some(([, value]) => value) ||
        !fields
            .filter((field) => field !== "patronymic")
            .every((field) => field in dirtyFields);

    console.log(errors);

    return (
        <>
            <Heading textAlign={"center"}>
                Регистрация в цифровой платформе по организации чемпионатов
                <br />
                &quot;Абилимпикс Москва&quot;
            </Heading>
            <VStack width={"full"}>
                <PendingProvider error={errors.firstName?.message}>
                    <Input
                        variant={"filled"}
                        placeholder={"Имя"}
                        {...register("firstName")}
                    />
                </PendingProvider>
                <PendingProvider error={errors.lastName?.message}>
                    <Input
                        variant={"filled"}
                        placeholder={"Фамилия"}
                        {...register("lastName")}
                    />
                </PendingProvider>
                <PendingProvider error={errors.patronymic?.message}>
                    <Input
                        variant={"filled"}
                        placeholder={"Отчество"}
                        {...register("patronymic")}
                    />
                </PendingProvider>
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
                <PendingProvider error={errors.confirm?.message}>
                    <Input
                        variant={"filled"}
                        placeholder={"Подтверждение пароля"}
                        type={"password"}
                        {...register("confirm")}
                    />
                </PendingProvider>
                <PendingProvider error={errors.consent?.message}>
                    <Checkbox {...register("consent")}>
                        Я согласен с{" "}
                        <Link href={"/confidentiality"} opacity={0.7}>
                            политикой конфиденциальности и правилами обработки
                            персональных данных
                        </Link>
                    </Checkbox>
                </PendingProvider>
            </VStack>
            <VStack>
                <SubmitButton label={"Регистрация"} isDisabled={isDisabled} />
                <Button
                    as={NextLink}
                    href={`/auth/login`}
                    variant={"ghost"}
                    color={"whiteAlpha.700"}
                    _hover={{ color: "whiteAlpha.900" }}
                    _active={{ color: "whiteAlpha.700" }}
                    padding={0}
                >
                    Назад к входу
                </Button>
            </VStack>
        </>
    );
}
