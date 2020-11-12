import { connection } from '../index'
import { USER_ROLES } from '../types'

export const insertUser = async (
    id: string, 
    email: string, 
    password: string,
    role: USER_ROLES
    ): Promise<void> =>{
    await connection.insert({
        id,
        email,
        password,
        role
    }).into("user")
}