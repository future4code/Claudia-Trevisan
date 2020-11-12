export type AuthenticationData = {
    idUser: string,
    role: USER_ROLES
}

export enum USER_ROLES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type User = {
    id: string,
    email: string,
    password: string,
    role: USER_ROLES
}

export type address = {
    logradouro: string,
    bairro: string,
    cidade: string,
    estado: string
}

