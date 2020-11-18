import { Request, Response } from 'express'
import { insertAddress, insertAddressWithComplement } from '../data/insertAddres';
import { insertUser } from '../data/insertUser';
import { generateToken } from '../services/authenticator';
import { generateId } from '../services/generateId';
import { getAddressInfo } from '../services/getAddresInfo';
import { validation } from '../services/globals';
import { hash } from '../services/hashManager'

export const postUser = async (req: Request, res: Response): Promise<void> =>{
    try {
        const {email, password, cep, numero, role, complemento} = req.body;
        
        await validation({email, password, cep, numero, role});

        if(email.indexOf("@") === -1){
            res.statusCode = 400
            throw new Error("Email inválido")
        };

        if(password.length < 6){
            res.statusCode = 400
            throw new Error("Senha inválida")
        };

        const idUser: string = generateId();

        const hashPassword: string = await hash(password);

        const addressUser = await getAddressInfo(cep);

        if(!addressUser){
            res.statusCode = 400
            throw new Error("Cep inválido")
        }
        
        await insertUser(idUser, email, hashPassword, role);

        const idAddress: string = generateId();

        if(complemento){
            await insertAddressWithComplement(idAddress, numero, addressUser, complemento)
        };

        await insertAddress(idAddress, numero, addressUser);

        const token: string = generateToken({idUser, role});

        res
        .status(201)
        .send({
           message:"Usuário criado!",
           token
        })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}