import {connection} from '../index'
import { User } from '../types'

export const selectUserById = async (id: string): Promise<User> =>{
    const result = await connection('user')
        .select('*')
        .where({ id })
        
    return result[0]
}