import { BaseDatabase } from "./BaseDatabase"

class Migrations extends BaseDatabase {

   private static tableNameUsers: string = "labook_users"

   private static tableNamePosts: string = "labook_posts"

   private static tableNameFriendship: string = "labook_friendship"

   private static tableNameLike: string = "labook_likes"

   private static tableNameComment: string = "labook_comment"

   public getTableNameUsers = (): string => Migrations.tableNameUsers

   public getTableNamePosts = (): string => Migrations.tableNamePosts

   public getTableNameFriendship = (): string => Migrations.tableNameFriendship

   public getTableNameLike = (): string => Migrations.tableNameLike

   public getTableNameComment = (): string => Migrations.tableNameComment
   
   public createTables = async (): Promise<void> =>{
      try {
         await BaseDatabase.connection.raw(`
            CREATE TABLE ${Migrations.tableNameUsers} (
               id VARCHAR(255) PRIMARY KEY,
               name VARCHAR(255) NOT NULL,
               email VARCHAR(255) UNIQUE NOT NULL,
               password VARCHAR(255) NOT NULL
            );
         `)
   
         await BaseDatabase.connection.raw(`
            CREATE TABLE ${Migrations.tableNamePosts} (
               id VARCHAR(255) PRIMARY KEY,
               photo VARCHAR(255) NOT NULL,
               description VARCHAR(255) NOT NULL,
               type ENUM("normal","event") DEFAULT "normal",
               created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
               author_id VARCHAR(255),
               FOREIGN KEY (author_id) REFERENCES ${Migrations.tableNameUsers}(id)
            );
         `)
      } catch (error) {
         console.log(error)
      }
   }

   public createTableFriendship = async (): Promise<void> =>{
      try {
         await BaseDatabase.connection.raw(`
            CREATE TABLE ${Migrations.tableNameFriendship} (
               id_friend_1 VARCHAR(255),
               id_friend_2 VARCHAR(255),
               PRIMARY KEY (id_friend_1, id_friend_2),
               FOREIGN KEY (id_friend_1) REFERENCES ${Migrations.tableNameUsers}(id),
               FOREIGN KEY (id_friend_2) REFERENCES ${Migrations.tableNameUsers}(id)
               );
            `)
      } catch (error) {
         console.log(error)
      }
   }

   public createTableLike = async (): Promise<void> =>{
      try {
         await BaseDatabase.connection.raw(`
            CREATE TABLE ${Migrations.tableNameLike} (
               id_post VARCHAR(255),
               id_user VARCHAR(255),
               PRIMARY KEY (id_post, id_user),
               FOREIGN KEY (id_post) REFERENCES ${Migrations.tableNamePosts}(id),
               FOREIGN KEY (id_user) REFERENCES ${Migrations.tableNameUsers}(id)
            );
         `)
      } catch (error) {
         console.log(error)
      }
   }

   public createTableComment = async (): Promise<void> =>{
      await BaseDatabase.connection.raw(`
         CREATE TABLE ${Migrations.tableNameComment} (
            id_user VARCHAR(255),
            id_post VARCHAR(255),
            comment TEXT,
            PRIMARY KEY (id_user, id_post),
            FOREIGN KEY (id_user) REFERENCES ${Migrations.tableNameUsers}(id),
            FOREIGN KEY (id_post) REFERENCES ${Migrations.tableNamePosts}(id)
         );
      `)
   }
}

export default new Migrations()

const setup = new Migrations
setup.createTableComment()