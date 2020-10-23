import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import {countries, country} from './countries'

const app: Express = express()

app.use(express.json());
app.use(cors());

// app.get('/test/hello', (req: Request, res: Response) => {
//     res.send(`Olá, mundo!`)
// })

// app.get('/test/:number', (req: Request, res: Response) => {
//     res.send(
//        `Seu número da sorte é ${Number(req.params.number + 3)}!
//     `)
//  })

app.get("/countries/all", (req:Request, res: Response) =>{
    const result = countries.map(country =>({
        id: country.id,
        name: country.name
    }))
    res.status(200)
    .send(result)
});

app.get("/countries/search", (req: Request, res: Response)=>{
    let result: country[] = countries
    let errorCode: number = 400
    
    try{
        if(!req.query.continent && !req.query.name && !req.query.capital){
            errorCode =  404
            throw new Error()
        }
        if(req.query.name){
        result = result.filter(
            country => country.name.includes(req.query.name as string)
        )}
        if(req.query.capital){
        result = result.filter(
            country => country.capital.includes(req.query.capital as string)
        )}
        if(req.query.continent){
        result = result.filter(
            country => country.continent.includes(req.query.continent as string)
        )}
        res.status(200)
        .send(result)
    }
    catch(error) {
        res.status(errorCode)
        .send("Bad Request")
    }
})

app.get("/countries/:id", (req: Request, res: Response) =>{
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )
    if(result){
        res.status(200)
        .send(result)
    }
    else{
        res.status(400)
        .send("Not Found")
    }
})

app.put("/countries/edit/:id", (req: Request, res: Response) =>{
    let errorCode: number = 400
    let result: country | undefined = countries.find(
            country => country.id === Number(req.params.id)
    )
    try{
        if(!req.headers.authorization || !req.params.id || !req.body.name || !req.body.capital){
            errorCode = 401
            throw new Error()
        }
        if(result){
            result.name = req.body.name
            result.capital = req.body.capital
        }
        else{
            errorCode = 404
            throw new Error()
        }
        res.status(200)
        .end()
    }
    catch{
        res.status(errorCode)
        .send("Ausencia de dados ou não encontrado")
    }
})

// app.get("/countries/search", (req: Request, res: Response)=>{
//     const result: country[] = countries.filter(
//         country => country.name.includes(req.query.name as string)
//     )
//     res.status(200).send(result)
// })

// app.delete("/countries/:id", (req: Request, res: Response) =>{
//     let errorCode: number = 400

//     try{
//         if(!req.headers.authorization){
//             errorCode = 401
//             throw new Error()
//         }
//         const countryIndex: number = countries.findIndex(
//             (country) => country.id === Number(req.params.id)
//         )

//         if(countryIndex === -1){
//             errorCode = 404
//             throw new Error()
//         }

//         countries.splice(countryIndex, 1)

//         res.status(200).end()
//     }
//     catch(error) {
//         res.status(errorCode).end()
//     }
// })

// app.get("/countries/:id", (req: Request, res: Response)=>{
//     const result: country | undefined = countries.find(
//         country => country.id === Number(req.params.id)
//     )
//     res.status(200).send(result)
// })

app.listen(3003, () =>{
    console.log("servidor pronto na porta 3003")
})
