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

app.get("/bank/consult", (req: Request, res: Response) =>{
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });