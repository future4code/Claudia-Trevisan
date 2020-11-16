import { selectAll } from "../../data/user/selectAll";
import { User } from "../../types";

export const getAllBusiness = async (token: string): Promise<User[]> =>{
    try {
        if(!token){
            throw new Error('verify token')
        };

        const allUsers = await selectAll();

        return allUsers

    } catch (error) {
        error.message || error.sqlMessage
    }
    return [];        
}