import bdd from '../config/bdd.js';

// obtenir tous les ingrésients par l'id de la recette
export const getIngredientsByRecipeId = async (id) => {
    const getIngredientsByRecipeId =
    `SELECT 
            ingredients.id_ingredient,
            ingredients.name_ingredient,
            recipe_ingredients.quantity
        FROM recipe_ingredients
        JOIN ingredients
            ON recipe_ingredients.ingredient_id = ingredients.id_ingredient
        WHERE recipe_ingredients.recipe_id = ?`
        ;
        
    const [response] = await bdd.query(getIngredientsByRecipeId, [id]);
    return response;    
};  

// obtenir tous les ingrédients
export const getAllIngredients = async () => {
    const getAllIngredients =
    "SELECT id_ingredient, name_ingredient FROM ingredients";

    const [response] = await bdd.query(getAllIngredients);
    return response;    
};

// Supprimer un ingrédient par son id
export const deleteIngredientById = async (id) => {
    const deleteIngredientById =
    "DELETE FROM ingredients WHERE id_ingredient = ?";

    const [response] = await bdd.query(deleteIngredientById, [id]);
    return response;    
};

export default {
    getIngredientsByRecipeId,
    getAllIngredients,
    deleteIngredientById
};  