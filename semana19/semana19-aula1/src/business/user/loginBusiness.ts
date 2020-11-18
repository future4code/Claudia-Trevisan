import { selectUserByEmail } from "../../data/user/selectUserByEmail";
import { generateToken } from "../../services/authenticator";
import { compare } from "../../services/hashManager";
import { User } from "../../types";


export const loginBusiness = async (input: any): Promise<string> =>{
    try {
        if (!input.email || !input.password) {
            throw new Error('Preencha os campos "email" e "password"')
        }

        const userData: User = await selectUserByEmail(input.email);

        const verifyPassword: boolean = await compare(input.password, userData.password);

        if(!verifyPassword){
            throw new Error("User not found or Password is incorrect")
        };

        const token = generateToken({id: userData.id, role: userData.role});

        return token
  
    } catch (error) {
        error.message || error.sqlMessage
    }
    return "";        
}