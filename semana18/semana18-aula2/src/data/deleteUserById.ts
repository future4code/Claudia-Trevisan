import { connection } from '../index'

export const deleteUserById = async (id: string): Promise<void> =>{
    await connection.raw(`
        DELETE FROM user
        WHERE id = "${id}";
    `)
}