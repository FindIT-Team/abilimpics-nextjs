import { extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Card, Input } from "./components";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

export const theme = extendTheme({
    config,
    components: {
        Card,
        Input,
    },
    styles: {
        global: (props: StyleFunctionProps) => ({
            html: {
                scrollBehavior: "smooth",
            },
            body: {
                bg: mode("gray.100", "#0d1117")(props),
                textWrap: "balance",
            },
        }),
    },
});
