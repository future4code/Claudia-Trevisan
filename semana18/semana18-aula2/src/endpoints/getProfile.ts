import { Request, Response } from 'express'
import { selectUserById } from '../data/selectUserById';
import { getData } from '../services/authenticator';
import { User } from '../types';

export const getProfile = async (req: Request, res: Response): Promise<void> =>{
    try {
        const token: string = req.headers.Authorization as string

        const authenticationData = getData(token);

        if (authenticationData.role !== "NORMAL") {
            res.statusCode = 401
            throw new Error("Apenas usuários normais podem ter acesso a essas informações");
        }

        const user: User = await selectUserById(authenticationData.id);

        res.status(200)
        .send({
            id: user.id,
            email: user.email,
            role: authenticationData.role
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}