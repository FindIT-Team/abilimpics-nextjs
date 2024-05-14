import { CompetenceTasksList } from "@/pagesLayer/competence/tasks";

export default function Page({
    params: { competenceCategory, competence },
}: {
    params: { competenceCategory: string; competence: string };
}) {
    const obj = { competenceCategory, competence };

    return <CompetenceTasksList init={obj} />;
}
