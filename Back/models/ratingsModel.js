import bdd from '../config/bdd.js';

// Ajouter une note
export const AddRatings = async (user_id, recipe_id, value) => {
    const AddRatings =
    'INSERT INTO ratings (user_id, recipe_id, value) VALUES (?, ?, ?)';
    const [response] = await bdd.query(AddRatings, [user_id, recipe_id, value]);
    return response;
};

// Récupérer les notes d'une recette 
export const getRatingsByRecipeId = async (recipe_id) => {
    const getRatingsByRecipeId =
    'SELECT ratings.id_rating, ratings.value, ratings.create_at_rating, users.pseudo_user FROM ratings JOIN users ON ratings.user_id = users.id_user WHERE ratings.recipe_id = ?';
    const [response] = await bdd.query(getRatingsByRecipeId, [recipe_id]);
    return response;
};

// Calculer la moyenne des notes d'une recette
export const getAVGRatingByRecipeId = async (recipe_id) => {
    const getAVGRatingByRecipeId =
    'SELECT AVG(ratings.value) as average_rating FROM ratings WHERE ratings.recipe_id = ?';
    const [response] = await bdd.query(getAVGRatingByRecipeId, [recipe_id]);
    return response[0];
};
