import { Request, Response } from 'express';
import { selectAll } from '../data/selectAll';

export const getUserByName = async (req: Request, res: Response): Promise<any> =>{
    try{
        const all = await selectAll()

        const user = all.find(
            (user: { name: string; }) => user.name === req.params.name as string)
        
        if(!user){
            res.statusCode = 404
            throw new Error("Not found.")
        }
        res.status(200)
        .send(user)
    }
    catch(error){
        res.send(error.message)
    }
}