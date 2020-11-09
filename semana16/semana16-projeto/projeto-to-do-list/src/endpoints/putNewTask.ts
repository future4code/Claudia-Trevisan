import {Request, Response} from 'express';
import { allUsers } from '../data/allUsers';
import { createTask } from '../data/createTask';
import { User } from '../types';

export const putNewTask = async (req: Request, res: Response): Promise<void> =>{
    try{
        const {title, description, limitDate, creatorUserId} = req.body
        const [day, month, year] = req.body.limitDate.split("/")
        const users: User[] = await allUsers()
        const user: User | undefined = users.find(user => user.id === creatorUserId)
        
        if(!title){
            res.statusCode = 401
            throw new Error("Falta informação titulo")
        }
        if(!description){
            res.statusCode = 401
            throw new Error("Falta informação descrição")
        }
        if(!limitDate){
            res.statusCode = 401
            throw new Error("Falta informação data limite")
        }
        if(!creatorUserId){
            res.statusCode = 401
            throw new Error("Falta informação id do usuario criador")
        }
        const date: Date = new Date(year, month, day)
        const nickName = user?.nickName
        await createTask(title, description, date, creatorUserId, nickName)
        res.status(200)
        .send("New Task sucessfully created")
    }
    catch(error){
        res.send(error.message)
    }
};