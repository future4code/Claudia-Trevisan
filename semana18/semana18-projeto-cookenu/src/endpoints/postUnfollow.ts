import { Request, Response } from 'express'
import { validation } from '../constants/validation';
import { deleteRelationFollower } from '../data/deleteRelationFollower';

export const postUnfollow = async (req: Request, res: Response): Promise<void> =>{
    try {
        const {userToUnfollowId} = req.body;

        await validation({userToUnfollowId});

        const token = req.headers.authorization;

        if(!token){
            res.statusCode
            throw new Error("Verify token access");
        };

        await deleteRelationFollower(userToUnfollowId);

        res.status(200)
        .send("Unfollowed successfully")

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })    
    }
}