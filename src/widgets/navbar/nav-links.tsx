"use client";

import { Link } from "@chakra-ui/next-js";
import { HStack } from "@chakra-ui/react";

export function NavLinks() {
    const links = [
        { label: "Компетенции", href: "/#competence-categories" },
        { label: "Новости", href: "/#news" },
        { label: "Основные задачи", href: "/#tasks" },
        { label: "О нас", href: "/about" },
        { label: "Личный кабинет", href: "/login" },
    ];

    return (
        <HStack
            justifyContent={"end"}
            flexGrow={1}
            spacing={5}
            textTransform={"uppercase"}
            fontWeight={"medium"}
            fontSize={"lg"}
        >
            {links.map(({ href, label }) => (
                <Link
                    href={href}
                    key={label}
                    transition={"ease-in-out 150ms"}
                    opacity={0.6}
                    _hover={{ opacity: 1 }}
                >
                    {label}
                </Link>
            ))}
        </HStack>
    );
}
