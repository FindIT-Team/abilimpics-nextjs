import { Heading, HStack, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { NavLinks } from "@/widgets/navbar/nav-links";
import { BackButton } from "@/features/back-button";
import { Image } from "@/shared";

export function Navbar() {
    return (
        <HStack
            as={"nav"}
            top={0}
            zIndex={99999}
            position={"sticky"}
            height={20}
            width={"full"}
            background={"#12151e"}
            boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.8)"}
            paddingX={10}
            justifyContent={"space-between"}
            gap={5}
        >
            <HStack as={NextLink} href={"/"}>
                <Image
                    src={"/logo.webp"}
                    height={10}
                    alt={"Логотип Абилимпикса"}
                />
                <Heading fontSize={"3xl"}>Абилимпикс</Heading>
            </HStack>
            <NavLinks />
            <VStack position={"absolute"} top={"120px"} left={"20px"}>
                <BackButton isIcon={true} />
            </VStack>
        </HStack>
    );
}
