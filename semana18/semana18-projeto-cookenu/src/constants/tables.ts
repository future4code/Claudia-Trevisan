import { connection } from './connection'

const createTableUsers = async (): Promise<void> =>{
    await connection.raw(`
        CREATE TABLE Users (
            id VARCHAR(255) PRIMARY KEY,
            email VARCHAR(255) NOT NULL,
            name VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `)
};

const createTableRecipes = async (): Promise<void> =>{
    await connection.raw(`
        CREATE TABLE Recipes (
            id VARCHAR(255) PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            date DATE NOT NULL,
            id_user VARCHAR(255) NOT NULL,
            FOREIGN KEY (id_user) REFERENCES Users(id)
        );
    `)
};

const createTableRelationsFolowers = async (): Promise<void> =>{
    await connection.raw(`
    CREATE TABLE RelationsFolowers(
        id_folower VARCHAR(255),
        id_folowed VARCHAR(255),
        PRIMARY KEY (id_folower, id_folowed),
        FOREIGN KEY (id_folower) REFERENCES Users(id),
        FOREIGN KEY (id_folowed) REFERENCES Users(id)
        );
    `)
};

createTableUsers();

createTableRecipes();

createTableRelationsFolowers();
