export enum ROLES {
    ADMIN,
    NORMAL
};

export type AuthenticationData = {
    id: string,
    role: ROLES
};

export type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: ROLES
}
 