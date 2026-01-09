import * as ingredientsControllers from '../controllers/ingredientsControllers.js';
import express from 'express';

const router = express.Router();

// Route pour obtenir tous les ingrédients par l'id de la recette
router.get('/recipe/:id', ingredientsControllers.getIngredientsByRecipeId);

// Route pour obtenir tous les ingrédients
router.get('/Ingredients', ingredientsControllers.getAllIngredients);

// Route pour supprimer un ingrédient par son id
router.delete('/Ingredients/:id', ingredientsControllers.deleteIngredientById);

export default router;  

