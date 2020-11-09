import {connection} from '../index';
import { User } from '../types';

export const selectAll = async (): Promise<User[]> =>{
    try{
        const all = await connection.raw(`
            SELECT * FROM aula48_exercicio;
        `)
        return all[0]
    }
    catch(error){
        ({message: error.message})
        return []
    }
}