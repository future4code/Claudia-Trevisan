import { connection } from '../constants/connection'
import { Recipe } from '../types'

export const insertRecipe = async (recipe: Recipe): Promise<void> =>{
    await connection.insert({
        id: recipe.id,
        title: recipe.title,
        description: recipe.description,
        date: recipe.date,
        id_user: recipe.id_user
    }).into('Recipes')
}