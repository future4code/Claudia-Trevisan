import UserDatabase from "../data/UserDatabase";
import { AuthenticationData, CreateUserInput, LoginInput, User } from "../model/User";
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

            await UserDatabase.signup(newUser)

            const token = authenticator.generateToken({
                id
            })
            return token
        } catch (error) {
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

    public friendship = async (token: string, id: string): Promise<void> =>{
        try {
            validation({id})

            if(!token){
                throw new Error("verify token");
            }

            const tokenData: AuthenticationData = authenticator.getTokenData(token)

            if(tokenData.id === id){
                throw new Error("o id informado é o seu proprio id");
            }

            await UserDatabase.friendship(id, tokenData.id)

        } catch (error) {
            throw new Error(error.sqlmessage || error.message);
        }
    }

    public unfriendship = async (id: string, token: string): Promise<void> =>{
        try {
            validation({id})

            if(!token){
                throw new Error("verify token");
            }

            const tokenData: AuthenticationData = authenticator.getTokenData(token)

            await UserDatabase.unfriendship(id, tokenData.id)

        } catch (error) {
            throw new Error(error.sqlmessage || error.message);
        }
    }
}

export default new UserBusiness()