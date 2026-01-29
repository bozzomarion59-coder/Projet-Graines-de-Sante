import bdd from '../config/bdd.js';

// Récupérer toutes les notes
export const getAllRatings = () => {
  return bdd.query("SELECT * FROM ratings");
};


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
  const sql = `
    SELECT AVG(value) AS average_rating
    FROM ratings
    WHERE recipe_id = ?
  `;
  const [rows] = await bdd.query(sql, [recipe_id]);
  return rows[0];
};

