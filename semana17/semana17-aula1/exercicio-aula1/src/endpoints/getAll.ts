import { Request, Response } from 'express'
import { selectAll } from '../data/selectAll'

export const getAll = async (req: Request, res: Response): Promise<any> =>{
    try{
        const all = await selectAll()

        if(!all.lenght){
            res.statusCode = 404
            throw new Error("Not found")   
        }

        res.status(200)
        .send(all)
    }
    catch(error){
        res.send(error.message)
    }
}