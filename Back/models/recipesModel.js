import bdd from "../config/bdd.js";

// Obtenir toutes les recettes en incluant le nom de la catégorie
export const getAllRecipes = async () => {
    const getAllRecipes = 
    `SELECT 
            recipes.id_recipe,
            recipes.title_recipe,
            recipes.description,
            recipes.instructions,
            recipes.image_png,
            recipes.preparation_time,
            recipes.cooking_time,
            recipes.create_at_recipe,
            categories_recipes.name_categorie AS categorie
        FROM recipes
        JOIN categories_recipes
            ON recipes.categorie_id = categories_recipes.id_categorie
        ORDER BY recipes.id_recipe DESC
        `;

    const [response] = await bdd.query(getAllRecipes);
    return response;
};

// Obtenir une recette par ID en incluant le nom de la catégorie
export const getRecipeById = async (id) => {
    const getRecipeById = 
    `SELECT 
            recipes.id_recipe,
            recipes.title_recipe,
            recipes.description,
            recipes.instructions,
            recipes.image_png,
            recipes.preparation_time,
            recipes.cooking_time,
            recipes.create_at_recipe,
            categories_recipes.name_categorie AS categorie
        FROM recipes
        JOIN categories_recipes
            ON recipes.categorie_id = categories_recipes.id_categorie
        WHERE recipes.id_recipe = ?`;

    const [response] = await bdd.query(getRecipeById, [id]);
    return response;
};  

// Créer une nouvelle recette
export const createRecipe = async (categorie_id, title_recipe, description, instructions, image_png, preparation_time, cooking_time) => {
    const createRecipe = 
    "INSERT INTO recipes (categorie_id, title_recipe, description, instructions, image_png, preparation_time, cooking_time) VALUES (?, ?, ?, ?, ?, ?, ?)";
    
    const [response] = await bdd.query(createRecipe, [categorie_id, title_recipe, description, instructions, image_png, preparation_time, cooking_time]);
    return response;
};

// Mettre à jour une recette existante
export const updateRecipe = async (id_recipe, categorie_id, title_recipe, description, instructions, image_png, preparation_time, cooking_time) => {
    const updateRecipe = 
    "UPDATE recipes SET categorie_id = ?, title_recipe = ?, description = ?, instructions = ?, image_png = ?, preparation_time = ?, cooking_time = ? WHERE id_recipe = ?";

    const [response] = await bdd.query(updateRecipe, [categorie_id, title_recipe, description, instructions, image_png, preparation_time, cooking_time, id_recipe]);
    return response;
};

// Supprimer une recette
export const deleteRecipe = async (id_recipe) => {
    const deleteRecipe = 
    "DELETE FROM recipes WHERE id_recipe = ?";

    const [response] = await bdd.query(deleteRecipe, [id_recipe]);
    return response;
};  

export default {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe,
};