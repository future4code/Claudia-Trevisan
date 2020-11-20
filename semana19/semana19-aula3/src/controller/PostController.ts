import {Request, Response} from 'express'
import PostBusiness from '../business/PostBusiness'
import { CreatePostInput, Post } from '../model/Post'

class PostController {
    public createPost = async (req: Request, res: Response): Promise<void> =>{
        try {
            const input: CreatePostInput = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type
            }

            const token: string = req.headers.authorization as string

            await PostBusiness.createPost(input, token)

            res.status(200)
            .send('Post publicado')
        } catch (error) {
            res
            .status(400)
            .send({
               message: error.message || error.sqlMessage
            })
        }
    }

    public getPostById = async (req: Request, res: Response): Promise<void> =>{
        try {
            const id = req.params.id

            const token = req.headers.authorization as string

            const result: Post = await PostBusiness.getPostById(id, token)

            res.status(200)
            .send({
                id: result.getId(),
                photo: result.getPhoto(),
                description: result.getDescription(),
                type: result.getType(),
                createdAt: result.getCreatedAt(),
                authorId: result.getAuthorId()
            })
        } catch (error) {
            res
            .status(error.statusCode)
            .send({
               message: error.message || error.sqlMessage
            })
        }
    }
}

export default new PostController()