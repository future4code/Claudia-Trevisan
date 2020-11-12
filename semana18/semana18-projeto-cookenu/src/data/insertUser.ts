import { connection } from '../constants/connection'
import { User } from '../types'

export const insertUser = async (
    id: string,
    info: User
): Promise<void> =>{
    await connection.insert({
        id: id,
        email: info.email,
        name: info.name,
        password: info.password
    }).into('Users')
};