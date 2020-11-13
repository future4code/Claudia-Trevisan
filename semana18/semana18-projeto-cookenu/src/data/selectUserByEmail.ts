import { connection } from '../constants/connection'
import { User } from '../types'

export const selectUserByEmail = async (email: string): Promise<User> =>{
    const result = await connection.raw(`
        SELECT * FROM Users
        WHERE email = "${email}";
    `)

    return result[0][0]
}