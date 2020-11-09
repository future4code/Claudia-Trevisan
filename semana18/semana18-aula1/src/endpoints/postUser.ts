import { Request, Response } from 'express'
import { insertUser } from '../data/insertUser';
import { generateToken } from '../services/authenticator';
import { generateId } from '../services/generateId';
import { validation } from '../services/globals';

export const postUser = async (req: Request, res: Response): Promise<void> =>{
    try {
        const {email, password} = req.body;
        
        await validation({email, password});

        if(email.indexOf("@") === -1){
            res.statusCode = 400
            throw new Error("Email inválido")
        };

        if(password.length < 6){
            res.statusCode = 400
            throw new Error("Senha inválida")
        };

        const id: string = generateId();
        
        await insertUser(id, email, password);

        const token: string = generateToken({id});

        res
        .status(201)
        .send({
           message:"Usuário criado!",
           token
        })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}