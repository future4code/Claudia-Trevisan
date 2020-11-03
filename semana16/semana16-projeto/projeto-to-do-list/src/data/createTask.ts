import {connection} from '../index';

export const createTask = async (
    title: string, 
    description: string, 
    limitDate: Date, 
    creatorUserId: number,
    creatorUserNickName: string | undefined
    ): Promise<void> =>{
    try{
        await connection.raw(`
            INSERT INTO tasks (title, description, limitDate, status, creatorUserId, creatorUserNickName)
            VALUES (
                "${title}",
                "${description}",
                "${limitDate}",
                "to_do",
                "${creatorUserId}",
                "${creatorUserNickName}");
        `)
        console.log("sucesso")
    }
    catch{
        console.log("erro")
    }
}