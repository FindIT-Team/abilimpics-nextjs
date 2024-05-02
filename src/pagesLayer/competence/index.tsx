import { CompetenceDto } from "@/entities/competences";

export function Competence({ init }: { init: unknown }) {
    const { title } = init as CompetenceDto;
    return <></>;
}
