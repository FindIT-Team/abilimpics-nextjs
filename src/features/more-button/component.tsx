import { Button } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { useMore } from "./hook";

export function MoreButton({
    packs,
    setPacks,
    fetchFunc,
}: {
    packs: Promise<unknown[]>[];
    setPacks: Dispatch<SetStateAction<Promise<unknown[]>[]>>;
    fetchFunc: (offset?: string) => Promise<unknown[]>;
}) {
    const [isDisabled, setIsDisabled] = useState(true);

    async function handleClick() {
        const lastPack = await packs[packs.length - 1];
        const offset = (lastPack[lastPack.length - 1] as { id: string }).id;
        const newPack = fetchFunc(offset);
        setPacks((prev) => [...prev, newPack]);
    }

    useMore(packs, setIsDisabled);

    return (
        <Button
            isDisabled={isDisabled}
            _disabled={{ display: "none" }}
            onClick={handleClick}
        >
            Показать еще
        </Button>
    );
}
