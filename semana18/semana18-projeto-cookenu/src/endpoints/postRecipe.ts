import { Request, Response } from 'express'
import { validation } from '../constants/validation';
import { insertRecipe } from '../data/insertRecipe';
import { getTokenData } from '../services/authenticator';
import { generateId } from '../services/idGenerator';
import { AuthenticationData } from '../types';

export const postRecipe = async (req: Request, res: Response): Promise<void> =>{
    try {
        const {title, description} = req.body;

        await validation({title, description});

        const token: string = req.headers.authorization as string;

        if(!token){
            res.statusCode = 401
            throw new Error()
        };

        const createdAt: Date = new Date();

        const tokenData: AuthenticationData = getTokenData(token);

        if(!tokenData){
            res.statusCode = 401
            throw new Error()
        };

        const id: string = generateId()
        
        await insertRecipe({
            id: id, 
            title: title, 
            description: description, 
            date: createdAt, 
            id_user: tokenData.id
        });

        res.status(200)
        .send("Recipe posted with sucess")

    } catch (error) {
        if(error.message === "jwt expired"){
            res.status(404)
            .send("Token expired. Please login again")
        }
        res.status(400).send({
            message: error.message || error.sqlMessage
        })    
    }
}