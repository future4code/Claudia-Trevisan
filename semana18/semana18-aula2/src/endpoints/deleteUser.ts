import { Request, Response } from 'express'
import { deleteUserById } from '../data/deleteUserbyId';
import { getData } from '../services/authenticator';
import { validation } from '../services/globals'

export const deleteUser = async (req: Request, res: Response): Promise<void> =>{
    try {
        
        const token = req.headers.authorization as string;

        const {id} = req.params;
 
        await validation({id});

        const authenticationData = getData(token);

        if(authenticationData.role !== "ADMIN"){
            res.statusCode = 401
            throw new Error("Não autorizado")
        }

        await deleteUserById(id)
        
        res.status(200)
        .send("Usuário deletado com sucesso")

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}