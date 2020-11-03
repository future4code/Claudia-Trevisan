import {connection} from '../index';

export const updateUser = async (id: number, name: string, nickName: string): Promise<void> =>{
    try{
        await connection.raw(`
            UPDATE users
            SET name "${name}", nickName "${nickName}"
            WHERE id = ${id};
        `)
    }
    catch{
        console.log("erro")
    }
}