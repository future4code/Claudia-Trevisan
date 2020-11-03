import {connection} from '../index'
import {Actor} from '../types'

export const searchActorByName = async (name: string): Promise<any> =>{
    try{
        const result = await connection.raw(`SELECT * FROM actor WHERE name LIKE %${name}%`)

        return result[0]
    }
    catch(error){
        return []
    }
}