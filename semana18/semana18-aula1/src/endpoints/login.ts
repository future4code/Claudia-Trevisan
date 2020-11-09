import { Request, Response } from 'express'
import { selectUserByEmail, User } from '../data/selectUserByEmail';
import { generateToken } from '../services/authenticator';
import { validation } from '../services/globals';

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const {email, password} = req.body;
        
        await validation({email, password});

        if(email.indexOf("@") === -1){
            res.statusCode = 400
            throw new Error("Email inválido")
        };

        const user: User = await selectUserByEmail(email);

        if(!user || user.password !== password){
        res.statusCode = 404
        throw new Error("Usuário não encontrado ou senha incorreta")
        };

        const token: string = await generateToken({
            id: user.id
        });

        res.status(200)
        .send(token)
      
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}