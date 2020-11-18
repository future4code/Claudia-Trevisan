import { connection } from '../connection'

export const insertUser = async (
    id: string,
    name: string,
    email: string,
    password: string,
    role?: string
): Promise<void> =>{
    if(role){
        await connection.raw(`
        INSERT INTO User_Arq 
            VALUES (
                "${id}",
                "${name}",
                "${email}",
                "${password}",
                "${role}
            );
        `)
    }
    await connection.raw(`
    INSERT INTO User_Arq 
        VALUES (
            "${id}",
            "${name}",
            "${email}",
            "${password}"
        );
    `)
}