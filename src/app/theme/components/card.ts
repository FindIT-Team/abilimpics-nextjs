import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(cardAnatomy.keys);

const freshVariant = {
    container: {
        backgroundColor: "#161b22",
        background:
            "radial-gradient(circle 1800px, #1c53c942, #161b22, #161b22, #161b22, #161b22, #161b22)",
        backgroundSize: "200% 400%",
        backgroundPosition: "50% 100%",
        border: "1px solid #2b3138",
        borderRadius: "20px",
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.6)",
        transition: "border 0.3s, box-shadow 0.3s, background 0.5s ease",
        boxSize: "full",
        justifyContent: "space-between",
        padding: 5,
        _hover: {
            border: "1px solid #1f66ff9a",
            boxShadow: "0px 0px 15px #1f66ff9a",
        },
        _focus: {
            border: "1px solid #1f66ff9a",
            boxShadow: "0px 0px 15px #1f66ff9a",
        },
        _focusVisible: {
            border: "1px solid #1f66ff9a",
            boxShadow: "0px 0px 15px #1f66ff9a",
        },
    },
    header: { paddingBottom: 2 },
    body: { paddingTop: 2 },
};

const rowFreshVariant = {
    ...freshVariant,
    container: {
        ...freshVariant.container,
        flexDirection: "row",
        gap: 5,
        backgroundSize: "200%",
        backgroundPosition: "100%",
        background:
            "linear-gradient(90deg, #1f66ff42, #161b22, #161b22, #161b22, #161b22, #161b22)",
    },
    header: { paddingY: 0 },
    body: { paddingY: 0 },
};

const variants = {
    fresh: definePartsStyle(freshVariant),
    freshLight: definePartsStyle({
        ...freshVariant,
        container: {
            ...freshVariant.container,
            _hover: {
                ...freshVariant.container._hover,
                backgroundPosition: "50% 70%",
            },
            _focus: {
                ...freshVariant.container._focus,
                backgroundPosition: "50% 70%",
            },
            _focusVisible: {
                ...freshVariant.container._focusVisible,
                backgroundPosition: "50% 70%",
            },
        },
    }),
    rowFresh: definePartsStyle(rowFreshVariant),
    rowFreshLight: definePartsStyle({
        ...rowFreshVariant,
        container: {
            ...rowFreshVariant.container,
            _hover: {
                ...rowFreshVariant.container._hover,
                backgroundSize: "100%",
                backgroundPosition: "0%",
            },
            _focus: {
                ...rowFreshVariant.container._focus,
                backgroundSize: "100%",
                backgroundPosition: "0%",
            },
            _focusVisible: {
                ...rowFreshVariant.container._focusVisible,
                backgroundSize: "100%",
                backgroundPosition: "0%",
            },
        },
    }),
};

export const Card = defineMultiStyleConfig({
    variants,
});
