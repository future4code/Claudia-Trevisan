import {connection} from '../index'
import {Actor} from '../types'

export const allActors = async (): Promise<Actor[]> =>{
    try{
        const result = await connection.raw(`SELECT * FROM actor`)

        return result[0]
    }
    catch(error){
        return []
    }
}