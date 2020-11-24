import { Comment, Relations } from "../model/Relations";
import { BaseDatabase } from "./BaseDatabase";
import Migrations from "./Migrations";

class RelationsDatabase extends BaseDatabase {

    public friendship = async (infos: Relations): Promise<void> =>{
        try {

            await BaseDatabase.connection(Migrations.getTableNameFriendship())
            .insert({
                id_friend_1: infos.getId_1(),
                id_friend_2: infos.getId_2(),
            })

            await BaseDatabase.connection(Migrations.getTableNameFriendship())
            .insert({
                id_friend_1: infos.getId_2(),
                id_friend_2: infos.getId_1(),
            })

        } catch (error) {

            throw new Error(error.sqlmessage || error.message);
        }
    }

    public unfriendship = async (infos: Relations): Promise<void> =>{
        try {

            await BaseDatabase.connection.raw(`
                DELETE FROM ${Migrations.getTableNameFriendship()}
                WHERE id_friend_1 = "${infos.getId_1()}" 
                AND id_friend_2 = "${infos.getId_2()}";
            `)

            await BaseDatabase.connection.raw(`
                DELETE FROM ${Migrations.getTableNameFriendship()}
                WHERE id_friend_1 = "${infos.getId_2()}" 
                AND id_friend_2 = "${infos.getId_1()}";
            `)

        } catch (error) {

            throw new Error(error.sqlmessage || error.message);
        }
    }

    public likePost = async (infos: Relations): Promise<void> =>{
        try {

            await BaseDatabase.connection.raw(`
                INSERT INTO ${Migrations.getTableNameLike()}
                VALUES (
                    "${infos.getId_1()}",
                    "${infos.getId_2()}"
                );
            `)

        } catch (error) {

            throw new Error(error.sqlmessage || error.message);
        }
    }

    public unlikePost = async (infos: Relations): Promise<void> =>{
        try {

            await BaseDatabase.connection.raw(`
                DELETE FROM ${Migrations.getTableNameLike()}
                WHERE id_post = "${infos.getId_1()}"
                AND id_user = "${infos.getId_2()}";
            `)

        } catch (error) {

            throw new Error(error.sqlmessage || error.message);
        }
    }

    public postComment = async (infos: Comment): Promise<void> =>{
        try {
            
            await BaseDatabase.connection.raw(`
                INSERT INTO ${Migrations.getTableNameComment()}
                VALUES (
                    "${infos.getId_user()}",
                    "${infos.getId_post()}",
                    "${infos.getComment()}"
                );
            `)

        } catch (error) {

            throw new Error(error.sqlmessage || error.message);
        }
    }
}

export default new RelationsDatabase()