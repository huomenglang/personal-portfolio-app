export type Experience = {
    position: string
    company: string
    period: {
        start: string
        finish: string
    },
    description: string[]
}

export type ExperienceList = {
    startYear: string
    experience: Experience[]
}