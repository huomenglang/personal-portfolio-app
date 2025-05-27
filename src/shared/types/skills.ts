export type Skills = {
    title: string;
    folder: string;
    stack: SkillItem[];
}

export type SkillItem = {
    title: string;
    icon: string;
    altIcon?: string;
}