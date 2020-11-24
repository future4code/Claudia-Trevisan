import { Request, Response } from 'express'
import userBusiness from '../business/userBusiness'
import { CreateUserInput } from '../model/User'

class UserController {
    public signup = async (req: Request, res: Response): Promise<void> =>{
        try {
            const input: CreateUserInput = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
            
            const token = await userBusiness.signup(input)

            res.status(200)
            .send({token: token})

        } catch (error) {
            res
            .status(400)
            .send({
               message: error.message || error.sqlMessage
            })
        }
    }

    public login = async (req: Request, res: Response): Promise<void> =>{
        try {
            const input = {
                email: req.body.email,
                password: req.body.password
            }


            const token: string = await userBusiness.login(input)

            res.status(200)
            .send({token: token})

        } catch (error) {
            res
            .status(400)
            .send({
               message: error.message || error.sqlMessage
            })
        }
    }
}

export default new UserController()

