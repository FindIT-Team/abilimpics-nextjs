import { Box, HStack, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { BackButton } from "@/features/back-button";

export function MainBox({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <HStack
            justifyContent={"center"}
            as={"main"}
            marginY={10}
            userSelect={"none"}
        >
            <Box position={"absolute"} alignSelf={"start"} left={"30px"}>
                <BackButton isIcon={true} />
            </Box>
            <VStack spacing={20}>{children}</VStack>
        </HStack>
    );
}
