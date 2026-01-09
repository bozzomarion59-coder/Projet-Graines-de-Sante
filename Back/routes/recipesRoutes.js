import * as recipesControllers from '../controllers/recipesControllers.js';
import checkToken from '../middlewares/checkToken.js';

import express from 'express';

const router = express.Router();

// Routes pour la gestion de toutes les recettes 
router.get('/AllRecipes', recipesControllers.getAllRecipes);

// Route pour obtenir une recette par ID
router.get('/Recipe/:id', recipesControllers.getRecipeById);

// Route pour créer une nouvelle recette
router.post('/createRecipe', checkToken, recipesControllers.createRecipe);

// Route pour mettre à jour une recette
router.put('/updateRecipe/:id', checkToken, recipesControllers.updateRecipe);

// Route pour supprimer une recette
router.delete('/deleteRecipe/:id', checkToken, recipesControllers.deleteRecipe);

export default router;
