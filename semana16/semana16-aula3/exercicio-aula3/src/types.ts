export enum GENDER {
    FEMALE = 'FEMALE',
    MALE = 'MALE'
}

export type Actor ={
    id: number,
    name: string,
    salary: number,
    birth_date: Date,
    gender: GENDER
}