import {Request, Response} from 'express'
import { validation } from '../constants/validation';
import { insertUser } from '../data/insertUser';
import { hash } from '../services/hashManager';
import { generateId } from '../services/idGenerator';
import { generateToken } from '../services/authenticator'
import { selectUserByEmail } from '../data/selectUserByEmail';
import { User } from '../types';

export const postUser = async (req: Request, res: Response): Promise<void> =>{
    try {
        const {email, name, password} = req.body;

        await validation({email, name, password});

        if(email.indexOf("@") === -1){
            res.statusCode = 400
            throw new Error("Email inválido")
        };
        
        const idUser: string = generateId();

        const hashPassword: string = await hash(password); 

        await insertUser(idUser, email, name, hashPassword);

        const token: string = generateToken({id: idUser, email: email})

        res.status(200)
        .send({message: `Token: ${token}`})

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })    
    }
}