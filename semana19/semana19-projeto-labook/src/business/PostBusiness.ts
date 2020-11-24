import PostDatabase from "../data/PostDatabase";
import { CreatePostInput, Post, PostInput } from "../model/Post";
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
    
            const newPost: PostInput = new PostInput (
                id,
                input.photo,
                input.description,
                input.type,
                tokenData.id
            )
    
            await PostDatabase.createPost(newPost)    

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

            const result = await PostDatabase.getPostById(id)

            return result

        } catch (error) {
            throw new Error(error.sqlMessage || error.message) 
        }
    }

    public getFeed = async (token: string): Promise<Post[]> =>{
        try {

            if(!token){
                throw new Error("verify token");
            }

            const tokenData: AuthenticationData = authenticator.getTokenData(token)

            const result = await PostDatabase.getFeed(tokenData.id)

            return result

        } catch (error) {
            throw new Error(error.sqlMessage || error.message) 
        }
    }

    public getFeedByType = async (token: string, type: string): Promise<Post[]> =>{
        try {
            if(!token){
                throw new Error("verify token");
            }

            validation({type})
            
            if(type.toLowerCase() !== "normal" || type.toLowerCase() !== "event"){
                throw new Error("selecione o type 'normal' ou 'event'");
            }

            const result = await PostDatabase.getFeedByType(type.toLowerCase())

            return result

        } catch (error) {
            throw new Error(error.sqlMessage || error.message) 
        }
    }
}

export default new PostBusiness()