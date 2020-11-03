import { Request, Response } from 'express';
import { selectAll } from '../data/selectAll';
import { TYPE, User } from '../types';

export const getUserByType = async (req: Request, res: Response): Promise<any> =>{
    try{
        const all: User[] = await selectAll()

        const users = all.find(
            (user: { type: string; }) => user.type === req.params.type as string)
        
        if(!users){
            res.statusCode = 404
            throw new Error("Not found..")
        }
        if(!(req.params.type in TYPE)){
            res.statusCode = 400
            throw new Error("Bad request")
        }

        res.status(200)
        .send(users)
    }
    catch(error){
        res.send(error.message)
    }
}