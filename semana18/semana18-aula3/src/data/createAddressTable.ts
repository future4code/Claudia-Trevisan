import {connection} from '../index'

const createAddressTable = async (): Promise<void> =>{
    await connection.raw(`
        CREATE TABLE addres (
            id VARCHAR(255) PRIMARY KEY,
            logradouro VARCHAR(255) NOT NULL,
            numero INT NOT NULL,
            complemento VARCHAR(255),
            bairro VARCHAR(255) NOT NULL,
            cidade VARCHAR(255) NOT NULL,
            estado VARCHAR(2) NOT NULL
        );
    `)
}

createAddressTable()