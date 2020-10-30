export enum STATUS_TASK {
    TO_DO = "TO_DO",
    DOING = "DOING",
    DONE = "DONE"
}

export type User = {
    id: number,
    name: string,
    nickName: string,
    email: string
}