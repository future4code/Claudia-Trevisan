import RelationsDatabase from "../data/RelationsDatabase";
import { Comment, Relations } from "../model/Relations";
import { AuthenticationData } from "../model/User";
import authenticator from "../services/authenticator";
import { validation } from "../utils/validation";

class RelationsBusiness {

    public friendship = async (id: string, token: string): Promise<void> =>{
        try {

            validation({id})

            if(!token){
                throw new Error("verify token");
            }

            const tokenData: AuthenticationData = authenticator.getTokenData(token)

            if(tokenData.id === id){
                throw new Error("o id informado é o seu proprio id");
            }

            const infos: Relations = new Relations (
                id,
                tokenData.id
            )

            await RelationsDatabase.friendship(infos)

        } catch (error) {

            throw new Error(error.sqlmessage || error.message);
        }
    }

    public unfriendship = async (id: string, token: string): Promise<void> =>{
        try {

            validation({id})

            if(!token){
                throw new Error("verify token");
            }

            const tokenData: AuthenticationData = authenticator.getTokenData(token)

            const infos: Relations = new Relations (
                id,
                tokenData.id
            )

            await RelationsDatabase.unfriendship(infos)

        } catch (error) {
            
            throw new Error(error.sqlmessage || error.message);
        }
    }

    public likePost = async (idPost: string, token: string): Promise<void> =>{
        try {

            validation({idPost})

            if(!token){
                throw new Error("verify token");
            }

            const tokenData: AuthenticationData = authenticator.getTokenData(token)

            const infos: Relations = new Relations (
                idPost,
                tokenData.id
            )

            await RelationsDatabase.likePost(infos)

        } catch (error) {

            throw new Error(error.sqlMessage || error.message) 
        }
    }

    public unlikePost = async (idPost: string, token: string): Promise<void> =>{
        try {

            validation({idPost})

            if(!token){
                throw new Error("verify token");
            }

            const tokenData: AuthenticationData = authenticator.getTokenData(token)

            const infos: Relations = new Relations (
                idPost,
                tokenData.id
            )

            await RelationsDatabase.unlikePost(infos)

        } catch (error) {

            throw new Error(error.sqlMessage || error.message) 
        }
    }

    public postComment = async (
        idPost: string, 
        token: string, 
        comment: string
        ): Promise<void> =>{
        try {
            
            validation({idPost, comment})

            if(!token){
                throw new Error("verify token");
            }

            const tokenData: AuthenticationData = authenticator.getTokenData(token)

            const infos: Comment = new Comment (
                tokenData.id,
                idPost,
                comment
            )

            await RelationsDatabase.postComment(infos)

        } catch (error) {
            
            throw new Error(error.sqlMessage || error.message) 
        }
    }
}

export default new RelationsBusiness()