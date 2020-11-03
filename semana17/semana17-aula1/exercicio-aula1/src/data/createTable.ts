import {connection} from '../index'

export const createTable = async (): Promise<void> =>{
    try{
        await connection.raw(`
        CREATE TABLE aula48_exercicio(
            id INT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            type VARCHAR(255) NOT NULL
            );
        `)
        console.log("sucesso")
    }
    catch{
        console.log("erro")
    }
}

createTable()