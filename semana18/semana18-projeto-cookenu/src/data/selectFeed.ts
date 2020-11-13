import { connection } from '../constants/connection'
import { transformDate } from '../constants/convertDate'
import { Recipe } from '../types'

export const selectFeed = async (id: string): Promise<Recipe[]> =>{
    const result = await connection.raw(`
        SELECT 
        r.id as ID, 
        r.title as TITLE, 
        r.description as DESCRIPTION, 
        r.date as DATE, 
        r.id_user as ID_USER, 
        u.name as CHEF
        FROM Recipes r
        RIGHT JOIN Users u
        ON r.id_user = u.id
        JOIN RelationsFolowers rf
        ON rf.id_folowed = u.id
        WHERE rf.id_folower = "${id}";
    `)
    
    return result[0].map((recipe: any) =>{
        return{
           ID: recipe.ID, 
           Title: recipe.TITLE,
           Description: recipe.DESCRIPTION,
           Date: recipe.DATE && transformDate(recipe.DATE),
           IdUser: recipe.ID_USER,
           CHEF: recipe.CHEF
        }   
    }) 
}