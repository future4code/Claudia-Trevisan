import {Request, Response} from 'express';
import { selectTaskById } from '../data/selectTaskById';

export const getTaskById = async (req: Request, res: Response): Promise<void> =>{
    try{
        if(!req.params.id){
            res.statusCode = 401
            throw new Error("Bad request")
        }
        const task = await selectTaskById(Number(req.params.id))
        if(!task.lenght){
            res.statusCode = 404
            throw new Error("Not found")
        }

        const date = task.limitDate as string
        const dateConvert = date.split("-")
        task.limitDate = `${dateConvert[2]}/${dateConvert[1]}/${dateConvert[0]}`
        
        res.status(200)
        .send(task)
    }
    catch(error){
        res.send(error.message)
    }
}