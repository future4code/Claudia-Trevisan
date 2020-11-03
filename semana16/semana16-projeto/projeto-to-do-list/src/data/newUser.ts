import {connection} from '../index';

export const newUser = async (name: string, nickName: string, email: string): Promise<void> =>{
    try{
        await connection.raw(`
            INSERT INTO users (name, nickName, email)
            VALUES ("${name}", "${nickName}", "${email}");
        `)
        console.log("sucesso")  
    }
    catch{
        console.log("erro")
    }
};