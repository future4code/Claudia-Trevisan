import { User } from '../../types'
import { connection } from '../connection'

export const selectUserByEmail = async (email: string): Promise<User> =>{
    const result = await connection.raw(`
        SELECT * FROM User_Arq
        WHERE email = "${email}";
    `)
    console.log(result[0][0])
    return result [0][0]
}