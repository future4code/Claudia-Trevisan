import { Request, Response } from 'express'
import { transformDate } from '../constants/convertDate';
import { validation } from '../constants/validation'
import { selectRecipeById } from '../data/selectRecipeById';

export const getRecipeById = async (req: Request, res: Response): Promise<void> =>{
    try {
        const {id} = req.params;

        await validation({id});

        const token = req.headers.authorization;

        if(!token){
            res.statusCode = 401
            throw new Error("Verify token");
        };

        const result = await selectRecipeById(id);

        if(!result){
            res.statusCode = 404
            throw new Error("Recipe not found")
        };

        const date = transformDate(result.date)
        
        res.status(200)
        .send({
            id: result.id,
            title: result.title,
            description: result.description,
            date: date
        });

    } catch (error) {
        res.status(400)
        .send(error.message || error.sqlmessage)
    }
}