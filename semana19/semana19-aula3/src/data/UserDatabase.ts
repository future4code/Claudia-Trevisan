import { User } from '../model/User'
import { BaseDatabase } from './BaseDatabase'

class UserDatabase extends BaseDatabase{
    private static tableName: string = "labook_users"

    public getTableName = ():string => UserDatabase.tableName

    public createUser = async (user: User): Promise<void> =>{
        try {
            await BaseDatabase.connection.raw(`
            INSERT INTO ${UserDatabase.tableName}
            VALUES (
                "${user.getId()}",
                "${user.getName()}",
                "${user.getEmail()}",
                "${user.getPassword()}"
            );
        `)
        } catch (error) {
            throw new Error("Erro do banco: " + error.sqlmessage);
        }
    }

    public selectUserByEmail = async (email: string): Promise<User> =>{
        try {
            const result = await BaseDatabase.connection.raw(`
                SELECT * FROM ${UserDatabase.tableName}
                WHERE email = "${email}"
            `)
            
            return new User(
                result[0].id,
                result[0].name,
                result[0].email,
                result[0].password
            )

        } catch (error) {
            throw new Error(error.sqlmessage || error.message);
        }
    }
}

export default new UserDatabase()