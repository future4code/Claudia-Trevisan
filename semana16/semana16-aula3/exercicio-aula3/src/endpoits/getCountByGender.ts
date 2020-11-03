import { Request, Response } from 'express'
import {countActorByGender} from '../data/countActorByGender'
import {GENDER} from '../types'

export const getCountByGender = async (req: Request, res: Response) =>{
    try{
        const result: number = await countActorByGender(req.params.gender)
        
        if(!result){
            res.statusCode = 404
            throw new Error("Not found")
        }

        if(!(req.params.gender in GENDER)){
            res.statusCode = 406
            throw new Error("Invalid actor gender")
        }

        res.status(200)
        .send(result)
    }
    catch(error){
        res.send(error.message)
    }
}