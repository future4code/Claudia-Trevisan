import { User } from '../model/User'
import { BaseDatabase } from './BaseDatabase'
import Migrations from './Migrations';

class UserDatabase extends BaseDatabase{

    public signup = async (user: User): Promise<void> =>{
        try {

            await BaseDatabase.connection.raw(`
            INSERT INTO ${Migrations.getTableNameUsers()}
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
                SELECT * FROM ${Migrations.getTableNameUsers()}
                WHERE email = "${email}"
            `)
            
            return new User(
                result[0][0].id,
                result[0][0].name,
                result[0][0].email,
                result[0][0].password
            )

        } catch (error) {
            throw new Error(error.sqlmessage || error.message);
        }
    }
}

export default new UserDatabase()