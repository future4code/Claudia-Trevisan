//importando express com Request e Response e cors
import express, {Express, Request, Response} from 'express';
import cors from 'cors';
//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app: Express = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

//Exercicio 1
//A - metodo GET
//B - atraves do path
app.get("/users", (req: Request, res: Response): void =>{

    try{
        res.status(200).send(users);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

//Exercicio 2
//A - utilizando pathParams por se tratar de dados controlados e conhecidos
//B - atraves do enum posso definir os types que podem ser utilizados
app.get("/users/:type", (req: Request, res: Response): void =>{

    try{
        const usersByType = users.filter((user)=>user.type === req.params.type
        )
        res.status(200).send(usersByType);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

//exercicios 3
//A - do tipo query por se tratar de dados mais aleatorios
app.get("/users/name", (req: Request, res: Response): void =>{
    let user: user | undefined = users.find(user => user.name === req.query.name)
    try{
        if(!user){
            throw new Error()
        }
        res.status(200).send(user);
    }catch{
        res.status(400).send({
            message: "Error searching for user by name, not found"
        });
    }
});

//Exercicio 4
//A - nada mudou.
//B - Acho que não por ser um metodo mais de alteração e atualização de dados então, 
//me parece que ele não deveria mudar o tamanho do array.
app.post("/users/create", (req: Request, res: Response): void=>{
    let verifyUser: user | undefined = users.find(user => user.email === req.body.email)
    try{
        if(verifyUser){
            throw new Error()
        }
        if(req.body.type in UserType){
            let id = new Date()
            let body: user ={
                id: Number(id),
                name: req.body.name,
                email: req.body.email,
                age: req.body.age,
                type: req.body.type
            }
            users.push(body)
        }
        res.status(200).send({message: "User created successfully"});
    }catch(error){
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})

//Exercicio 5
app.put("/users/edit/:id", (req: Request, res: Response): void=>{
    let verifyUser: user | undefined = users.find(user => user.id === Number(req.params.id))
    try{
        if(!verifyUser){
            throw new Error()
        }
        verifyUser.name = "-ALTERADO " + req.body.name,

        res.status(200).send(verifyUser);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
})

//Exercicio 6
app.patch("/users/edit/:id", (req: Request, res: Response): void=>{
    let verifyUser: user | undefined = users.find(user => user.id === Number(req.params.id))
    try{
        if(!verifyUser){
            throw new Error()
        }
        verifyUser.name = "-REALTERADO " + req.body.name,

        res.status(200).send("Usuario alterado com sucesso");
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
})

app.delete("/users/:id", (req: Request, res: Response): void=>{
    let verifyUser: number = users.findIndex(user => user.id === Number(req.params.id))
    try{
        if(!verifyUser){
            throw new Error()
        }
        users.splice(verifyUser, 1)
        res.status(200).send("Usuário excluido com sucesso");
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
