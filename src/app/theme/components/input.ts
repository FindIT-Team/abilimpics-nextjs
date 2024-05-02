import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(inputAnatomy.keys);

const variants = {
    search: definePartsStyle({
        field: {
            borderRadius: "full",
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.6)",
            border: "1px solid #20252c",
            background: "#161b22",
            transition: "border 0.3s, box-shadow 0.3s, width 0.3s",
            _groupHover: {
                border: "1px solid #1f66ff9a",
                boxShadow: "0px 0px 15px #1f66ff9a",
            },
            _groupFocus: {
                border: "1px solid #1f66ff9a",
                boxShadow: "0px 0px 15px #1f66ff9a",
            },
            _focus: {
                border: "1px solid #1f66ff9a",
                boxShadow: "0px 0px 15px #1f66ff9a",
            },
        },
    }),
};

export const Input = defineMultiStyleConfig({
    variants,
});
