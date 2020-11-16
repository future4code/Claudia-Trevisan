import { Request, Response } from 'express'
import { loginBusiness } from '../../business/user/loginBusiness'

export const login = async (req: Request, res: Response): Promise<void> =>{
    try {
        const input = {
            email: req.body.email,
            password: req.body.password
        }

        const token = await loginBusiness(input)

        res.status(200)
        .send(token)

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}