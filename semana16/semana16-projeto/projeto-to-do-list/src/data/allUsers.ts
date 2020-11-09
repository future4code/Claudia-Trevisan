import {connection} from '../index';
import { User } from '../types';

export const allUsers = async (): Promise<User[]> =>{
    try{
        const result = await connection.raw(`
            SELECT * FROM users
        `)
        return result[0]
    }
    catch (error){
        return []
    }
};