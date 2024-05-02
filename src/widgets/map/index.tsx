import { Heading, VStack } from "@chakra-ui/react";
import Script from "next/script";

export function Map() {
    return (
        <VStack spacing={5}>
            <Heading textTransform={"uppercase"}>Мы на карте</Heading>
            <VStack borderRadius={"md"} overflow={"hidden"} id={"yandex-map"}>
                <Script
                    type="text/javascript"
                    async
                    src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab202c33ebdde8e0c2f161135dcec92c54607ae022c9d1c9b3b5962d7f373ed7d&amp;width=700&amp;height=400&amp;lang=ru_RU&amp;scroll=true&amp;id=yandex-map"
                />
            </VStack>
        </VStack>
    );
}
