import { connection } from '../index'

export const createUserTable = async (): Promise<void> =>{
    await connection.raw(`
        CREATE TABLE user(
            id VARCHAR(255) PRIMARY KEY,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `)
}

createUserTable()