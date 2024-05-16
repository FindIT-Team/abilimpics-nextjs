import { HStack, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

export function MainBox({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <HStack
            justifyContent={"center"}
            as={"main"}
            marginY={10}
            userSelect={"none"}
        >
            <VStack spacing={20}>{children}</VStack>
        </HStack>
    );
}
