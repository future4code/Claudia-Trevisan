import {connection} from '../index'
import { User } from './selectUserByEmail'

export const selectUserById = async (id: string): Promise<User> =>{
    const result = await connection('user')
        .select('*')
        .where({ id })
        
    return result[0]
}