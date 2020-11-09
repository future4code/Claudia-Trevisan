import {Request, Response} from 'express';
import { allUsers } from '../data/allUsers';
import { newUser } from '../data/newUser';
import {User} from '../types';

export const createUser = async (req: Request, res: Response): Promise<void> =>{
    try{
        const {name, nickName, email} = req.body;
        const users: User[]= await allUsers();
        const user: User | undefined = users.find(user => user.email === email)
        
        if(!name && !nickName && !email){
            res.statusCode = 400
            throw new Error("Bad request")
        }

        if(user){
            res.statusCode = 409
            throw new Error("Usuario ja cadastrado")
        }
        
        await newUser(name, nickName, email)

        res.status(200)
        .send("Usuario cadastrado com sucesso")
    }
    catch(error){
        res.send(error.message)
    }
};
