import { Request, Response } from 'express'
import { User } from '../data/selectUserByEmail'
import { selectUserById } from '../data/selectUserById';
import { getData } from '../services/authenticator';

export const getUserById = async (req: Request, res: Response): Promise<void> =>{
    try {
        const token: string = req.headers.Authorization as string

        const authenticationData = getData(token);

        const user: User = await selectUserById(authenticationData.id);

        res.status(200)
        .send({
            id: user.id,
            email: user.email
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}