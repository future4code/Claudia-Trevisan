import { insertUser } from "../../data/user/insertUser";
import { generateToken } from "../../services/authenticator";
import { hash } from "../../services/hashManager";
import { generateId } from "../../services/idGenerator";
import { ROLES } from '../../types'

export const signupBusiness = async (input: any): Promise<string> =>{
    try{
        if (!input.name || !input.email || !input.password) {
          throw new Error('Preencha os campos "name","nickname", "email" e "password"')
        }

        if(input.role){
            if(!(input.role in ROLES)){
                throw new Error('Por favor corrija o campo "role"')
            }
        };

        if(input.email.indexOf("@") === -1){
            throw new Error("Invalid Email");
        };

        if(input.password.length < 6){
            throw new Error("Password must have at least 6 characters");
        };

        const id: string = generateId();

        const password: string = await hash(input.password)

        await insertUser(id, input.name, input.email, password, input.role)

        const token: string = generateToken({
            id,
            role: input.role
         });
    
        return token;
    
    }catch(error){
        error.message || error.sqlMessage
    }
    return "";        
}