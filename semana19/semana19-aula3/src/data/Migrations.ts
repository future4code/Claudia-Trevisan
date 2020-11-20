import {BaseDatabase} from "./BaseDatabase"

export default class Migrations extends BaseDatabase {
   private static tableNameUsers: string = "labook_users"

   private static tableNamePosts: string = "labook_posts"

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
}

const setup = new Migrations
setup.createTables()