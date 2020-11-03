import {connection} from '../index';
import { Task } from '../types';

export const selectTaskById = async (id: number): Promise<any> =>{
    try{
        const result = await connection.raw(`
            SELECT * 
            FROM tasks
            WHERE id = ${id};
        `)
        return result[0][0]
    }
    catch{
        console.log("erro")
        return []
    }
};