import {connection} from '../index'

export const createToDoListTable = async (): Promise<void> =>{
    try{
        await connection.raw(`
            CREATE TABLE to_do_list
        `)
    }
}