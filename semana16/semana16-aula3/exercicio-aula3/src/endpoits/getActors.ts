import {Request, Response} from 'express'
import {allActors} from '../data/allActors'
import {Actor} from '../types'

export const getActors = async (req: Request, res: Response) =>{
    try{
        const actors: Actor[] = await allActors()

        if(!actors.length){
            res.statusCode = 404
            throw new Error("No actors found")
        }
        res.status(200)
        .send(actors)
    }
    catch(error){
        res.send(error.message)
    }
}
