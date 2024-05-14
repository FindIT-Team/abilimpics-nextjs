import { getOneNew } from "@/entities/news/queries/get-one";
import { New } from "@/pagesLayer/competence/new";
import { use } from "react";

export default function Page({
    params: { competenceCategory, competence, newPage },
}: {
    params: { competenceCategory: string; competence: string; newPage: string };
}) {
    const obj = use(getOneNew(newPage))!;

    return <New init={obj} />;
}
