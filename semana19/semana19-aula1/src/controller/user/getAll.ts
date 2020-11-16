import { Request, Response } from 'express'
import { getAllBusiness } from '../../business/user/getAllBusiness'

export const getAll = async (req: Request, res: Response): Promise<void> =>{
    try {
        const token = req.headers.authorization as string

        const allUsers = await getAllBusiness(token)

        res.status(200)
        .send(allUsers)

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}