import express from 'express';
import * as ratingsControllers from '../controllers/ratingsControllers.js';


const router = express.Router();

// Route pour ajouter une note
router.post('/', ratingsControllers.AddRatings);

// Route pour récupérer les notes d'une recette
router.get('/recipe/:recipe_id', ratingsControllers.getRatingsByRecipeId);

// Route pour récupérer la moyenne des notes d'une recette
router.get('/recipe/:recipe_id/average', ratingsControllers.getAVGRatingByRecipeId);

export default router;
