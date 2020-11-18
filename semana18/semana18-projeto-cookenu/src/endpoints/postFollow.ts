import { Request, Response } from 'express'
import { validation } from '../constants/validation';
import { insertFolower } from '../data/insertFolower';
import { getTokenData } from '../services/authenticator';

export const postFollow = async (req: Request, res: Response): Promise<void> =>{
    try {
        const {userToFollowId} = req.body;

        await validation({userToFollowId});

        const token = req.headers.authorization;

        if(!token){
            res.statusCode = 401
            throw new Error("Verify token.")
        };

        const tokenData = getTokenData(token);

        await insertFolower(tokenData.id, userToFollowId);

        res.status(200)
        .send("Followed sucessfuly")
    } catch (error) {
        res.status(400)
        .send(error.message || error.sqlmessage)
    }
}