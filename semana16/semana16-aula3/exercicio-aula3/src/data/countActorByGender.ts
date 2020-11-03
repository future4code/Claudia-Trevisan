import {connection} from '../index'
import {Actor, GENDER} from '../types'

export const countActorByGender = async (gender: any): Promise<any> =>{
    try{
        const result = await connection.raw(`
        SELECT COUNT(*) as count FROM actor WHERE gender = ${gender}`)

        const count = result[0][0].count

        return count
    }
    catch(error){
        return []
    }
}
