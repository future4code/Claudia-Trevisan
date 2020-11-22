import { Post, PostInput } from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";
import Migrations from "./Migrations";

class PostDatabase extends BaseDatabase {

    public createPost = async (post: PostInput): Promise<void> =>{
        try {

            await BaseDatabase.connection(Migrations.getTableNamePosts()).insert({
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
                SELECT * FROM ${Migrations.getTableNamePosts()}
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
                FROM ${Migrations.getTableNamePosts()} lp
                LEFT JOIN ${Migrations.getTableNameUsers()} lu
                ON lp.author_id = lu.id
                JOIN ${Migrations.getTableNameFriendship()} lf
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
                SELECT * FROM ${Migrations.getTableNamePosts()}
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