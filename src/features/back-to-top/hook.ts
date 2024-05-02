"use client";

import { RefObject, useEffect } from "react";

export function useBackToTop(ref: RefObject<HTMLButtonElement>) {
    useEffect(() => {
        const backToTop = ref.current;

        function handleScroll() {
            if (!backToTop) return;
            if (window.scrollY > 300) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [ref]);
}
