export enum TYPE {
    TEACHER = "TEACHER",
    OPERATIONS = "OPERATIONS",
    CX = "CX"
}

export type User = {
    id: number,
    name: string,
    email: string,
    type: TYPE 
}