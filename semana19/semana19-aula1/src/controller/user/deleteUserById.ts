import { Request, Response } from 'express'
import { deleteUserByIdBusiness } from '../../business/user/deleteUserByIdBusiness';

export const deleteUserById = async (req: Request, res: Response): Promise<void> =>{
    try {
        const id = req.params.id
        const token = req.headers.authorization as string

        await deleteUserByIdBusiness(id, token);

        res.status(200)
        .send("Usuário removido com sucesso")

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}