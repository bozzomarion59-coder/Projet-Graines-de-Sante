import ingredientsModel from '../models/ingredientsModel.js';

// Obtenir tous les ingrédients par l'id de la recette
export const getIngredientsByRecipeId = async (req, res) => {
    const { id } = req.params;
    try {
        const ingredients = await ingredientsModel.getIngredientsByRecipeId(id);
        res.status(200).json(ingredients);
    } catch (error) {
        console.error(error);
        res.status(500).json("une erreur est survenue");
    }
};

// Obtenir tous les ingrédients
export const getAllIngredients = async (req, res) => {
    try {
        const ingredients = await ingredientsModel.getAllIngredients();
        res.status(200).json(ingredients);
    } catch (error) {
        console.error(error);
        res.status(500).json("une erreur est survenue");
    }
};

// Supprimer un ingrédient par son id
export const deleteIngredientById = async (req, res) => {
    const { id } = req.params;
    try {
        await ingredientsModel.deleteIngredientById(id);
        res.status(200).json({ message: "Ingrédient supprimé avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json("une erreur est survenue");
    }
};