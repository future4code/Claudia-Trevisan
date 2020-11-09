import {connection} from '../index';

export const createTasksTable = async (): Promise<void> =>{
    try{
        await connection.raw(`
            CREATE TABLE tasks (
                id INT AUTO_INCREMENT,
                title VARCHAR(255) NOT NULL,
                description VARCHAR(255),
                limitDate DATE,
                PRIMARY KEY (id),
                creatorUserId INT,
                foreign key (creatorUserId) REFERENCES users(id) 
            );
        `)
        console.log("sucesso")
    }
    catch{
        console.log("erro")
    }
};

createTasksTable()