import { Request, Response } from 'express'
import { selectUserById } from '../data/selectUserById';
import { getData } from '../services/authenticator';
import { validation } from '../services/globals';
import { User, USER_ROLES } from '../types';

export const getUserById = async (req: Request, res: Response): Promise<void> =>{
    try {
        const token: string = req.headers.Authorization as string

        const authenticationData = getData(token);

        const {id} = req.params;

        await validation({id});

        const user: User = await selectUserById(id);

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