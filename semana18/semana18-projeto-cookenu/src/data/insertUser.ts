import { connection } from '../constants/connection'

export const insertUser = async (
    id: string,
    email: string,
    name: string,
    password: string
): Promise<void> =>{
    await connection.insert({
        id: id,
        email: email,
        name: name,
        password: password
    }).into('Users')
};