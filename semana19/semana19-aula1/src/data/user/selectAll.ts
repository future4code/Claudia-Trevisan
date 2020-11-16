import { User } from '../../types'
import { connection } from '../connection'

export const selectAll = async (): Promise<User[]> =>{
    const result = await connection.raw(`
        SELECT * FROM User_Arq;
    `)

    return result[0]
}