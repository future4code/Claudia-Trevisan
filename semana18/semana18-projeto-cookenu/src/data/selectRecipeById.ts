import { connection } from '../constants/connection'
import { Recipe } from '../types'

export const selectRecipeById = async (id: string): Promise<Recipe> =>{
    const result = await connection.raw(`
        SELECT * FROM Recipes
        WHERE id = "${id}";
    `)

    return result [0][0]
}