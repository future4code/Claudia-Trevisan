import PostDatabase from "../data/PostDatabase";
import { CreatePostInput, Post } from "../model/Post";
import { AuthenticationData } from "../model/User";
import authenticator from "../services/authenticator";
import idGenerator from "../services/idGenerator";
import { validation } from "../utils/validation";


class PostBusiness {
    public createPost = async (input: CreatePostInput, token: string): Promise<void> =>{
        try {
            validation(input)

            if(!token){
                throw new Error("Verify Token");
            }
    
            const id: string = idGenerator.generateId()
    
            const tokenData: AuthenticationData = authenticator.getTokenData(token)
    
            const newPost: Post = new Post (
                id,
                input.photo,
                input.description,
                input.type,
                tokenData.id
            )
    
            await PostDatabase.insertPost(newPost)        
        } catch (error) {
            throw new Error(error.sqlMessage || error.message) 
        } 
    }

    public getPostById = async (id: string, token: string): Promise<Post> =>{
        try {
            validation({id})

            if(!token){
                throw new Error("Verify Token");
            }

            const result = await PostDatabase.selectPostById(id)

            return result

        } catch (error) {
            throw new Error(error.sqlMessage || error.message) 
        }
    }
}

export default new PostBusiness()