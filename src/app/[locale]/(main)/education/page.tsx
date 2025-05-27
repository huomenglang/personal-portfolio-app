import  getLocalData  from "@/lib/getLocalData";
import { ExperienceList } from "@/shared/types/experience";
import ExperiencesView from "@/views/main/experience";
import { getLocale } from "next-intl/server";

export default async function ExperiencesPage() {
    const locale = await getLocale();
    const educationList: ExperienceList = await getLocalData("education", locale);

    return <ExperiencesView experienceList={educationList} year={2023}/>
}