import { HStack, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

export function FormProvider({
    children,
    action,
}: {
    children: ReactNode;
    action: (formData: FormData) => void;
}) {
    return (
        <HStack
            justifyContent={"center"}
            as={"main"}
            marginY={10}
            userSelect={"none"}
        >
            <form action={action}>
                <VStack padding={5} spacing={5}>
                    {children}
                </VStack>
            </form>
        </HStack>
    );
}
