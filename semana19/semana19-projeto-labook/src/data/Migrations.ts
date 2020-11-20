import {BaseDatabase} from "./BaseDatabase"

export default class Migrations extends BaseDatabase {
   private static tableNameUsers: string = "labook_users"

   private static tableNamePosts: string = "labook_posts"

   private static tableNameFriendship: string = "labook_friendship"

   public getTableNameUsers = (): string => Migrations.tableNameUsers

   public getTableNamePosts = (): string => Migrations.tableNamePosts
   
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
               FOREIGN KEY (author_id) REFERENCES labook_users (id)
            );
         `)
      } catch (error) {
         console.log(error)
      }
   }

   public createTableFrindship = async (): Promise<void> =>{
      try {
         await BaseDatabase.connection.raw(`
            CREATE TABLE ${Migrations.tableNameFriendship} (
               id_friend_1 VARCHAR(255),
               id_friend_2 VARCHAR(255),
               PRIMARY KEY (id_friend_1, id_friend_2),
               FOREIGN KEY (id_friend_1) REFERENCES labook_users(id),
               FOREIGN KEY (id_friend_2) REFERENCES labook_users(id)
               );
            `)
      } catch (error) {
         console.log(error)
      }
   }
}

const setup = new Migrations
setup.createTableFrindship()