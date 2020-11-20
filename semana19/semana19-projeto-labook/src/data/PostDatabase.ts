import { Post, PostInput } from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";


class PostDatabase extends BaseDatabase {
    private static tableName: string = "labook_posts"
    
    public getTableName = (): string => PostDatabase.tableName

    public createPost = async (post: PostInput): Promise<void> =>{
        try {
            await BaseDatabase.connection(PostDatabase.tableName).insert({
                id: post.getId(),
                photo: post.getPhoto(),
                description: post.getDescription(),
                type: post.getType(),
                author_id: post.getAuthorId()
            })

        } catch (error) {
           throw new Error(error.sqlmessage || error.message);
        }
    }

    public getPostById = async (id: string): Promise<Post> =>{
        try {
            const result = await BaseDatabase.connection.raw(`
                SELECT * FROM ${PostDatabase.tableName}
                WHERE id = "${id}";
            `)

            const post: Post = new Post (
                result[0][0].id,
                result[0][0].photo,
                result[0][0].description,
                result[0][0].type,
                result[0][0].createdAt,
                result[0][0].authorId
            )
            return post
            
        } catch (error) {
            throw new Error(error.sqlmessage || error.message);
        }
    }
    
    public getFeed = async (id: string): Promise<Post[]> =>{
        try {

            const feed: Post[] = []

            const result = await BaseDatabase.connection.raw(`
                SELECT lp.id, lp.photo, lp.description, lp.type, lp.created_at, lp.author_id
                FROM labook_posts lp
                LEFT JOIN labook_users lu
                ON lp.author_id = lu.id
                JOIN labook_friendship lf
                ON lf.id_friend_2 = lu.id
                WHERE lf.id_friend_1 = "${id}"
                ORDER BY created_at DESC;
            `)

            for(let item of result[0]){
                feed.push(Post.toPostModel(item))
            }

            return feed

        } catch (error) {
            throw new Error(error.sqlmessage || error.message);
        }
    }

    public getFeedByType = async (type: string): Promise<Post[]> =>{
        try {

            const feedType: Post[] = []

            const result = await BaseDatabase.connection.raw(`
                SELECT * FROM labook_posts
                WHERE type = "${type}"
                ORDER BY created_at DESC;
            `)

            for(let item of result[0]){
                feedType.push(Post.toPostModel(item))
            }

            return feedType

        } catch (error) {
            throw new Error(error.sqlmessage || error.message);
        }
    }
    
}
export default new PostDatabase()