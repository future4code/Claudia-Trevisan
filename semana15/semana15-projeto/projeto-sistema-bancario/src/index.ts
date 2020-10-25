import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import {extract, account, clients, verifyAge} from './data';
import {AddressInfo} from 'net'

const app: Express = express()

app.use(express.json());
app.use(cors());

app.post("/bank/new", (req: Request, res: Response): void =>{
    let verify: account | undefined = clients.find(client => client.cpf === req.body.cpf)
    const age: number = verifyAge(req.body.dateOfBirth)
    try{
        if(age < 18 || verify){
            throw new Error()
        }
        let newClient: account ={
            name: req.body.name,
            cpf: req.body.cpf,
            birth: req.body.dateOfBirth,
            balance: 0,
            extract: []
        }
        clients.push(newClient)
        res.status(200)
        .send({message: "Congratulations! You'r our new best client"})
        console.log(clients)
    }
    catch{
        res.status(404)
        .send("Bad Request")
    }
});

app.get("/bank/consult", (req: Request, res: Response): void =>{
    let clientBalance:  account | undefined = clients.find(client => client.cpf === Number(req.query.cpf))
    try{
        if(!clientBalance){
            throw new Error()
        }
        res.status(200)
        .send(`Seu saldo é ${clientBalance.balance}`)
    }
    catch{
        res.status(404)
        .send("Bad Request")
    }
});

app.put("/bank/deposit", (req: Request, res: Response) =>{
    let accountClient: account | undefined = clients.find(client => client.cpf === Number(req.body.cpf))
    let today: Date = new Date()
    let day: number = today.getDay()
    let month: number = today.getMonth()
    let year: number = today.getFullYear()
    try{
        if(!accountClient){
            throw new Error()
        }
        accountClient.balance += req.body.deposit
        let extract: extract = {
            value: req.body.deposit,
            date: `${day}/${month}/${year}`,
            description: "Deposito"
        }
        accountClient.extract.push(extract)
        res.status(200)
        .send(`Novo saldo: ${accountClient.balance}`)
    }
    catch{
        res.status(400)
        .send("Not found")
    }
});

app.post("/bank/payment", (req: Request, res: Response) =>{
    let today: Date = new Date()
    let day: number = today.getDay()
    let month: number = today.getMonth()
    let year: number = today.getFullYear()
    let date: string | undefined  = req.query.date as string
    let dateUser: string | string[] | undefined = date && date.split("/")
    let accountClient: account | undefined = clients.find(client => client.cpf === Number(req.body.cpf))
    try{
        if(!accountClient){
            throw new Error("Conta não encontrada")
        }
        if((Number(dateUser[0]) < day 
        && Number(dateUser[1]) < month 
        && Number(dateUser[2]) < year) 
        || (Number(dateUser[0]) < day) 
        && (Number(dateUser[1]) < month) 
        && (Number(dateUser[2]) === year)){
            throw new Error("Data invalida")
        }
        if(req.body.value > accountClient.balance){
            throw new Error("Saldo insuficiente")
        }
        if(date){
            accountClient.balance = accountClient.balance - req.body.value
            let extract: extract = {
                value: req.body.value,
                date: `${dateUser[0]}/${dateUser[1]}/${dateUser[2]}`,
                description: req.body.description
            }
            accountClient.extract.push(extract)
        }
        
        else{
            accountClient.balance = accountClient.balance - req.body.value
            let extract: extract = {
                value: req.body.value,
                date: `${day}/${month}/${year}`,
                description: req.body.description
            }
            accountClient.extract.push(extract)
        }
        res.status(200)
        .send("Operação realizada com sucesso")
    }
    catch{
        res.status(400)
        .send(Error)
    }

});

app.put("/bank/transfer", (req: Request, res: Response) =>{
    let accountClientFrom: account | undefined = clients.find(client => client.cpf === req.body.fromCpf)
    let accountClientTo: account | undefined = clients.find(client => client.cpf === req.body.toCpf)
    let today: Date = new Date()
    let day: number = today.getDay()
    let month: number = today.getMonth()
    let year: number = today.getFullYear()
    try{
        if(!accountClientFrom || !accountClientTo){
            throw new Error()
        }
        if(accountClientFrom.balance < req.body.value){
            throw new Error()
        }
        accountClientFrom.balance = accountClientFrom.balance - req.body.value
        let extract: extract = {
            value: req.body.value,
            date: `${day}/${month}/${year}`,
            description: "Transferencia entre contas"
        }
        accountClientFrom.extract.push(extract)
        accountClientTo.balance += req.body.value
        let extractTo: extract = {
            value: req.body.value,
            date: `${day}/${month}/${year}`,
            description: "Recebimento de transferencia entre contas"
        }
        accountClientTo.extract.push(extractTo)
        res.status(200)
        .send("Operação realiada com sucesso")
    }
    catch{
        res.status(400)
        .send("Erro!")
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