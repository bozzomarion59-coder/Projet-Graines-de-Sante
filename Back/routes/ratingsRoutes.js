import express from 'express';
import * as ratingsControllers from '../controllers/ratingsControllers.js';
import checkToken from '../middlewares/checkToken.js';


const router = express.Router();

// Route pour récupérer toutes les notes
router.get('/AllRatings', ratingsControllers.getAllRatings);

// Route pour ajouter une note
router.post('/', ratingsControllers.AddRatings);

// Route pour récupérer les notes d'une recette
router.get('/recipe/:recipe_id', ratingsControllers.getRatingsByRecipeId);

// Route pour récupérer la moyenne des notes d'une recette
router.get('/recipe/:recipe_id/average', ratingsControllers.getAVGRatingByRecipeId);

// Route pour supprimer une note
router.delete('/:id', checkToken, ratingsControllers.deleteRating);

export default router;
