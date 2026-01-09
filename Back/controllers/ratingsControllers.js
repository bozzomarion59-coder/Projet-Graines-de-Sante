import * as ratingsModel from '../models/ratingsModel.js';

// Ajouter une note
export const AddRatings = async (req, res) => {
    const { user_id, recipe_id, value } = req.body;
    try {
        const ratings = await ratingsModel.AddRatings(user_id, recipe_id, value);
        res.status(201).json(ratings);
    } catch (error) {
        console.error(error);
        res.status(500).json("Erreur lors de l\'ajout de la note");
    }
};

// Récupérer les notes d'une recette
export const getRatingsByRecipeId = async (req, res) => {
    const { recipe_id } = req.params;
    try {
        const ratings = await ratingsModel.getRatingsByRecipeId(recipe_id);
        res.status(200).json(ratings);
    } catch (error) {
        console.error(error);
        res.status(500).json("Erreur lors de la récupération des notes");
    }
};

// Calculer la moyenne des notes d'une recette
export const getAVGRatingByRecipeId = async (req, res) => {
    const { recipe_id } = req.params;
    try {
        const ratings = await ratingsModel.getAVGRatingByRecipeId(recipe_id);
        res.status(200).json(ratings);
    } catch (error) {
        console.error(error);
        res.status(500).json("Erreur lors de la récupération de la moyenne des notes");
    }
};