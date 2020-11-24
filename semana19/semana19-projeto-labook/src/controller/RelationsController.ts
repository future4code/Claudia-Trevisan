import {Request, Response} from 'express'
import RelationsBusiness from '../business/RelationsBusiness'

class RelationsController {

    public friendship = async (req: Request, res: Response): Promise<void> =>{
        try {

            const {id} = req.body
            
            const token: string = req.headers.authorization as string

            await RelationsBusiness.friendship(id, token)

            res.status(200)
            .send("Amizade criada com sucesso")

        } catch (error) {

            res.status(400)
            .send({
               message: error.message || error.sqlMessage
            })
        }
    }

    public unfriendship = async (req: Request, res: Response): Promise<void> =>{
        try {

            const {id} = req.body

            const token = req.headers.authorization as string

            await RelationsBusiness.unfriendship(id, token)

            res.status(200)
            .send("Amizade desfeita com sucesso")

        } catch (error) {

            res.status(400)
            .send({
               message: error.message || error.sqlMessage
            })
        }
    }

    public likePost = async (req: Request, res: Response): Promise<void> =>{
        try {

            const {id} = req.body

            const token: string = req.headers.authorization as string

            await RelationsBusiness.likePost(id, token)

            res.status(200)
            .send("Você curtiu este post")

        } catch (error) {

            res.status(400)
            .send({
               message: error.message || error.sqlMessage
            })
        }
    }

    public unlikePost = async (req: Request, res: Response): Promise<void> =>{
        try {

            const {id} = req.body

            const token: string = req.headers.authorization as string

            await RelationsBusiness.unlikePost(id, token)

            res.status(200)
            .send("Você descurtiu este post")

        } catch (error) {

            res.status(400)
            .send({
               message: error.message || error.sqlMessage
            })
        }
    }

    public postComment = async (req: Request, res: Response): Promise<void> =>{
        try {
            
            const {idPost, comment} = req.body

            const token: string = req.headers.authorization as string

            await RelationsBusiness.postComment(idPost, token, comment)

            res.status(200)
            .send("Comentario adicionado com sucesso.")

        } catch (error) {
            
            res.status(400)
            .send({
               message: error.message || error.sqlMessage
            })
        }
    }
}

export default new RelationsController()