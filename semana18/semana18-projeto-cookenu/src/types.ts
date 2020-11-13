export type User = {
    id: string,
    email: string,
    name: string,
    password: string
};

export type AuthenticationData = {
    id: string,
    email: string
};

export type Profile = {
    id: string,
    name: string,
    email: string
};

export type Recipe = {
    id: string,
    title: string,
    description: string,
    date: Date,
    id_user: string
}