import { Dispatch, SetStateAction, useEffect } from "react";

export function useMore(
    packs: Promise<unknown[]>[],
    setFunc: Dispatch<SetStateAction<boolean>>,
) {
    useEffect(() => {
        async function update() {
            if (packs.length === 0) return;
            const lastPack = await packs[packs.length - 1];
            if (lastPack.length < 6) setFunc(true);
            else setFunc(false);
        }

        update().then();
    }, [packs, setFunc]);
}
