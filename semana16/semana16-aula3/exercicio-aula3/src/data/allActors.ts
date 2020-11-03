import {connection} from '../index'

export const allActors = async (): Promise<any> =>{
    try{
        const result = await connection.raw(`SELECT * FROM actor`)

        return result[0]
    }
    catch(error){
        return []
    }
}

allActors()