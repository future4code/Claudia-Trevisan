import { Request, Response } from 'express'
import { updateSalary } from '../data/updateSalary'


export const updateSalaryById = async (req: Request, res: Response) =>{
    try{
        if((!req.body.id && !req.body.newSalary) 
        || (!req.body.id && req.body.newSalary) 
        || (req.body.id && !req.body.newSalary)){
            res.statusCode = 400
            throw new Error("Bad request")
        }

        updateSalary(req.body.id, req.body.newSalary)
    
        res.status(200)
        .send("Update sucess")
    }
    catch(error){
        res.send(error.message)
    }
}