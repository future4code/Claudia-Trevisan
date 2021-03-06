import { Request, Response } from 'express'
import { selectFeed } from '../data/selectFeed';
import { getTokenData } from '../services/authenticator';

export const getFeed = async (req: Request, res: Response): Promise<void> =>{
    try {
        const token = req.headers.authorization;

        if(!token){
            res.statusCode = 401
            throw new Error("Verify token.")
        };

        const tokenData = getTokenData(token);

        const feed = await selectFeed(tokenData.id)

        if(!feed){
            res.statusCode = 404
            throw new Error("Not found");
        }

        res.status(200)
        .send(feed)
    } catch (error) {
        res.status(400)
        .send(error.message || error.sqlmessage)
    }
}