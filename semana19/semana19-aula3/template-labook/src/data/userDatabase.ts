import { User } from '../model/User'
import { connection } from './connection'

class UserDatabase {
    private tableName: string = "labook_users"

    public getTableName = ():string => this.tableName

    public signup = async (user: User) =>{
        
    }
}