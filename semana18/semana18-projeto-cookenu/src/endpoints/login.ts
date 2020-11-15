import { compare } from 'bcryptjs';
import { Request, Response } from 'express'
import { validation } from '../constants/validation';
import { selectUserByEmail } from '../data/selectUserByEmail';
import { generateToken } from '../services/authenticator';
import { User } from '../types';

export const login = async (req: Request, res: Response): Promise<void> =>{
    try {
        const  {email, password} = req.body;
        await validation({email, password});
        const userData: User = await selectUserByEmail(email);
        const verifyPassword: boolean = await compare(password, userData.password);
        if(!verifyPassword){
            res.statusCode = 401
            throw new Error("User not found or Password is incorrect")
        };
        const newToken: string = generateToken({
            id: userData.id,
            email: userData.email
        })

        res.status(200)
        .send(`Usuário logado. Token: ${newToken}`)

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })    
    }
}