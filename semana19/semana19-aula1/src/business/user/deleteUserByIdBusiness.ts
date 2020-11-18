import { deleteUser } from "../../data/user/deleteUser";
import { getTokenData } from "../../services/authenticator";
import { ROLES } from '../../types'

export const deleteUserByIdBusiness = async (id: string, token: string): Promise<void> =>{
    try {
        if(!id){
            throw new Error('Preencha o ID')
        }

        const tokenData = getTokenData(token);

        if(tokenData.role !== ROLES.ADMIN){
            throw new Error("You have no permission to do this action")
        }

        await deleteUser(id);

    } catch (error) {
        error.message || error.sqlMessage
    }
}