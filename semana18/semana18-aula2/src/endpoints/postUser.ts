import { Request, Response } from 'express'
import { insertUser } from '../data/insertUser';
import { generateToken } from '../services/authenticator';
import { generateId } from '../services/generateId';
import { validation } from '../services/globals';
import { hash } from '../services/hashManager'

export const postUser = async (req: Request, res: Response): Promise<void> =>{
    try {
        const {email, password, role} = req.body;
        
        await validation({email, password, role});

        if(email.indexOf("@") === -1){
            res.statusCode = 400
            throw new Error("Email inválido")
        };

        if(password.length < 6){
            res.statusCode = 400
            throw new Error("Senha inválida")
        };

        const id: string = generateId();

        const hashPassword: string = await hash(password)
        
        await insertUser(id, email, hashPassword, role);

        const token: string = generateToken({id, role});

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