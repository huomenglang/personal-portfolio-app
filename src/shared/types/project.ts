export type Project = {
    title: string
    description: string
    image: string
    link: string
    stack: Stack[]
}

export type Stack = {
    title: string
    items: string[]
}