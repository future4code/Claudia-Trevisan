export type AuthenticationData = {
    id: string
}
 
export class User {
    private id: string
    private name: string
    private email: string
    private password: string

    constructor (
        id: string,
        name: string,
        email: string,
        password: string
    ){
        this.id = id,
        this.name = name,
        this.email = email,
        this.password = password
    }

    public getId = (): string => this.id
    public getName = (): string => this.name
    public getEmail = (): string => this.email
    public getPassword = (): string => this.password

    public setId(newId: string){
        this.id = newId
        return this
    }

    public setName(newName: string){
        this.name = newName
        return this
    }

    public setEmail(newEmail: string){
        this.email = newEmail
        return this
    }

    public setPassword(newPassword: string){
        this.password = newPassword
        return this
    }
}