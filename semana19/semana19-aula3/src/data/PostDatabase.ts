import { Post } from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";


class PostDatabase extends BaseDatabase {
    private static tableName: string = "labook_posts"
    
    public getTableName = (): string => PostDatabase.tableName

    public insertPost = async (post: Post): Promise<void> =>{
        try {
            await BaseDatabase.connection.raw(`
                INSERT INTO ${PostDatabase.tableName}
                VALUES (
                    "${post.getId()}",
                    "${post.getPhoto()}",
                    "${post.getDescription()}",
                    "${post.getType()}",
                    "${post.getCreatedAt()}",
                    "${post.getAuthorId()}"
                );
            `)
        } catch (error) {
           throw new Error(error.sqlmessage || error.message);
        }
    }

    public selectPostById = async (id: string): Promise<Post> =>{
        try {
            const result = await BaseDatabase.connection.raw(`
                SELECT * FROM ${PostDatabase.tableName}
                WHERE id = "${id}";
            `)

            const post: Post = new Post (
                result[0].id,
                result[0].photo,
                result[0].description,
                result[0].type,
                result[0].authorId
            )
            return post
            
        } catch (error) {
            throw new Error(error.sqlmessage || error.message);
        }
    }
}
export default new PostDatabase()