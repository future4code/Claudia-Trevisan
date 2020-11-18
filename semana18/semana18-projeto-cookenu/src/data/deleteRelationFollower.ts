import { connection } from '../constants/connection'

export const deleteRelationFollower = async (id: string): Promise<void> =>{
    await connection.raw(`
        DELETE FROM RelationsFolowers
        WHERE id_folowed = "${id}";
    `)
}