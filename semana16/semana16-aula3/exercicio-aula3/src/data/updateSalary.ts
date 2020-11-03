import {connection} from '../index'

export const updateSalary = async (id: number, newSalary: number): Promise<void> =>{
    try{
        await connection("actor")
        .update({
            salary: newSalary
        })
        .where("id", id)
    }
    catch(error){
        console.log(error)
    }
}