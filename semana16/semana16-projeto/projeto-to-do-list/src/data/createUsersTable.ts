import {connection} from '../index'

export const createUsersTable = async (): Promise<void> =>{
    try{
        await connection.raw(`
        CREATE TABLE users (
            id INT AUTO_INCREMENT,
            name VARCHAR(255),
            nickName VARCHAR(12) UNIQUE,
            email VARCHAR(255),
            PRIMARY KEY (id)
            );
        `)
        console.log("sucesso")
    }
    catch{
        console.log("erro")
    }
};

createUsersTable()