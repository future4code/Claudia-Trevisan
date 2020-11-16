import { Request, Response } from 'express'
import { signupBusiness } from '../../business/user/signupBusiness';

export const signup = async (req: Request, res: Response): Promise<void> =>{
    try {
        const input = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        };

        const token = await signupBusiness(input)

        res.status(200)
        .send(token)
        
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}