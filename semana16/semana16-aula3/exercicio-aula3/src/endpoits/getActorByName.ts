import {Request, Response} from 'express'
import {searchActorByName} from '../data/searchActorByName'
import {Actor} from '../types'


export const getActorByName = async (req: Request, res: Response) =>{
    try{
        const actor: Actor[] | undefined = await searchActorByName(req.params.name as string)
        if(!actor){
            res.statusCode = 404
            throw new Error("Not found")
        }
        res.status(200)
        .send(actor)
    }
    catch(error){
        res.send(error.message)
    }
}