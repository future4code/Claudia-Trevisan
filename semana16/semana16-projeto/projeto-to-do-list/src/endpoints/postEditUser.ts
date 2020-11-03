import {Request, Response} from 'express';
import { allUsers } from '../data/allUsers';
import { updateUser } from '../data/updateUser';
import { User } from '../types';

export const postEditUser = async (req: Request, res: Response): Promise<any> =>{
    try{
        const {name, nickName} = req.body;
        const users: User[] = await allUsers();
        const user: User | undefined = users.find(user => user.id === Number(req.params.id));

        if(!req.params.id){
            res.statusCode = 400
            throw new Error("Bad request")
        }
        if(!user){
            res.statusCode = 401
            throw new Error("Not found")
        }
        if((!name && !nickName)
        || (!name && nickName)
        || (name && ! nickName)){
            res.statusCode = 400
            throw new Error("Bad Request")
        }

        await updateUser(Number(req.params.id), name, nickName)

        res.status(200)
        .send("Atualizado com sucesso")
    }
    catch(error){
        res.send(error.message)
    }
};