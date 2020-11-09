import { connection } from '../index'

export type User = {
    id: string,
    email: string,
    password: string
}

export const selectUserByEmail = async (email: string): Promise<User> =>{
    try {
        const result = await connection("user")
           .select("*")
           .where({ email })
  
        return {
           id: result[0].id,
           email: result[0].email,
           password: result[0].password,
        }
  
    } catch (error) {
        throw new Error(error.slqMessage || error.message)
    }
}