import { Request, Response } from 'express'
import { selectUserByEmail } from '../data/selectUserByEmail';
import { generateToken } from '../services/authenticator';
import { validation } from '../services/globals';
import { compare } from '../services/hashManager';
import { User } from '../types';

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const {email, password, role} = req.body;
        
        await validation({email, password, role});

        if(email.indexOf("@") === -1){
            res.statusCode = 400
            throw new Error("Email inválido")
        };

        const user: User = await selectUserByEmail(email);

        const compareResult = await compare(password, user.password);

        if(!compareResult){
            res.statusCode = 400
            throw new Error("Senha inválida")
        }

        if(!user || user.password !== password){
        res.statusCode = 404
        throw new Error("Usuário não encontrado ou senha incorreta")
        };

        const token: string = generateToken({
            idUser: user.id,
            role: role
        });

        res.status(200)
        .send(token)
      
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}