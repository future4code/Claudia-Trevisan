import { Request, Response } from 'express'
import { selectUserByEmail } from '../data/selectUserByEmail';
import { getTokenData } from '../services/authenticator';
import { AuthenticationData, User, Profile } from '../types';

export const getOwnProfile = async (req: Request, res: Response): Promise<void> =>{
    try {
        const token: string = req.headers.authorization as string;

        if(!token){
            res.statusCode = 401
            throw new Error()
        };

        const tokenData: AuthenticationData = getTokenData(token);

        if(!tokenData){
            res.statusCode = 401
            throw new Error()
        };

        const userData: User = await selectUserByEmail(tokenData.email);
        
        if(!userData){
            res.statusCode = 401
            throw new Error("Token expired")
        };

        const profile: Profile = {
            id: userData.id,
            name: userData.name,
            email: userData.email
        };

        res.status(200)
        .send(profile)

    } catch (error) {
        res.status(400)
        .send(error.message || error.sqlmessage)
    }
}