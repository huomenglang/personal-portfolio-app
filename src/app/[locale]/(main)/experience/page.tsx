import  getLocalData  from "@/lib/getLocalData";
import { ExperienceList } from "@/shared/types/experience";
import ExperiencesView from "@/views/main/experience";
import { getLocale } from "next-intl/server";

export default async function ExperiencesPage() {
    const locale = await getLocale();
    const experienceList: ExperienceList = await getLocalData("experience", locale);

    return <ExperiencesView experienceList={experienceList} year={"Present"}/>
}