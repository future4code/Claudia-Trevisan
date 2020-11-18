import { connection } from '../constants/connection'

export const insertFolower = async (idFolower: string, idFolowed: string): Promise<void> =>{
    await connection.insert({
        id_folower: idFolower,
        id_folowed: idFolowed
    }).into('RelationsFolowers')
};