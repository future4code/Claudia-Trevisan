import knex from 'knex';
import express from 'express';
import {AddressInfo} from 'net';
import dotenv from 'dotenv';
import { createUser } from './endpoints/createUser';
import { getUserById } from './endpoints/getUserById';
import { postEditUser } from './endpoints/postEditUser';
import { putNewTask } from '../src/endpoints/putNewTask'
import { getTaskById } from './endpoints/getTaskById';

dotenv.config();

const app = express();

export const connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
});

app.put("/tasks/user", createUser);

app.get("/tasks/user/:id", getUserById);

app.post("/tasks/user/edit/:id", postEditUser);

app.put("/tasks/task", putNewTask);

app.get("/tasks/task/:id", getTaskById)


  
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
 });
 