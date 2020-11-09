import {Request, Response} from 'express';
import { allUsers } from '../data/allUsers';
import { User } from '../types';

export const getUserById = async (req: Request, res: Response): Promise<any> =>{
    try{
        const users: User[] = await allUsers();
        const user: User | undefined = users.find(user => user.id === Number(req.params.id))

        if(!req.params.id){
            res.statusCode = 400
            throw new Error("Bad request")
        }
        if(!user){
            res.statusCode = 404
            throw new Error("Not found")
        }

        res.status(200)
        .send(user)
    }
    catch(error){
        res.send(error.message)
    }
};