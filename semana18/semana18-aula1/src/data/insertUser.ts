import { connection } from '../index'

export const insertUser = async (
    id: string, 
    email: string, 
    password: string
    ): Promise<void> =>{
    await connection.insert({
        id,
        email,
        password
    }).into("user")
}