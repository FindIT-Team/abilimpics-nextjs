"use client";

import { useEffect, useState } from "react";

export function useFooter() {
    const [isFooterSticky, setIsFooterSticky] = useState(false);

    useEffect(() => {
        const navbar = document.querySelector("nav");
        const footer = Array.from(document.querySelectorAll("footer")).findLast(
            () => true,
        );

        const bodyHeight =
            document.documentElement.clientHeight -
            (navbar?.scrollHeight ?? 0) -
            (footer?.scrollHeight ?? 0);
        const main = document.querySelector("main");

        if (main) {
            const mainMarginTopHeight = parseFloat(
                getComputedStyle(main).marginTop,
            );
            const mainMarginBottomHeight = parseFloat(
                getComputedStyle(main).marginBottom,
            );

            const mainMarginHeight =
                mainMarginTopHeight + mainMarginBottomHeight;
            const mainHeight = main.scrollHeight + mainMarginHeight;
            console.log(main.scrollHeight, bodyHeight);

            if (bodyHeight > mainHeight) setIsFooterSticky(true);
        } else setIsFooterSticky(true);
    }, []);

    return isFooterSticky;
}
