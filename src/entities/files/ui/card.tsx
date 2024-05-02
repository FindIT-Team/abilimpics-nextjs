import { FileCardDto } from "@/entities/files";

export function FileCard({ data }: { data: unknown }) {
    const { name, type, size } = data as FileCardDto;

    return <></>;
}
