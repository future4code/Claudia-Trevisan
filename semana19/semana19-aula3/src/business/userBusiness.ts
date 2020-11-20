import UserDatabase from "../data/UserDatabase";
import { CreateUserInput, LoginInput, User } from "../model/User";
import authenticator from "../services/authenticator";
import hashManager from "../services/hashManager";
import IdGenerator from "../services/idGenerator";
import { validation } from "../utils/validation";


export class UserBusiness {
    public signup = async (input: CreateUserInput): Promise<string> =>{
        try {
            validation(input)

            const id: string = IdGenerator.generateId()

            const cypherPassword = await hashManager.hash(input.password)

            const newUser: User = new User (
                id,
                input.name,
                input.email,
                cypherPassword
            )

            await UserDatabase.createUser(newUser)

            const token = authenticator.generateToken({
                id
            })
            return token
        } catch (error) {
            if (error.sqlMessage.includes("Duplicate entry")) {
                throw new Error("Este usuário já existe!");
            }

            throw new Error(error.sqlMessage || error.message);
        }
    }

    public login = async (input: LoginInput): Promise<string> =>{
        try {

            validation(input)

            const user: User =  await UserDatabase.selectUserByEmail(input.email)

            if (!user) {
               throw new Error("Usuário não encontrado ou senha incorreta")
            }
    
            const passwordIsCorrect: boolean = await hashManager.compare(input.password, user.getPassword())

            console.log("aqui")
            if (!passwordIsCorrect) {
               throw new Error("Usuário não encontrado ou senha incorreta")
            }
    
            const token: string = authenticator.generateToken({
                id: user.getId()
            })


            return token
        } catch (error) {
            throw new Error(error.sqlmessage || error.message);
        }
    }
}

export default new UserBusiness()