import  getLocalData  from "@/lib/getLocalData";
import { getLocale } from "next-intl/server";
import Info from "./info";
import Skills from "./skills";

export default async function AboutView() {
    const locale = await getLocale();
    const personal = await getLocalData("personal", locale)
    const contacts = await getLocalData("contacts")
    const skills = await getLocalData("skills", locale)

    return (
        <div className='space-y-20 pt-8 md:pt-16'>
            <Info data={personal} contacts={contacts} />
            <Skills data={skills} />
        </div>
    )
}