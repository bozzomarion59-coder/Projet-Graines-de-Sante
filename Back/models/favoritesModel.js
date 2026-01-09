import bdd from '../config/bdd.js';

// Ajouter un favori
export const addFavorite = async (user_id, recipe_id) => {
    const addFavorite =
    "INSERT INTO favorites (user_id, recipe_id) VALUES (?, ?)";

    try {
        const [response] = await bdd.query(addFavorite, [user_id, recipe_id]);
        return response;

    } catch (error) {

        // Gestion des doublons
        if (error.code === "ER_DUP_ENTRY") {
            return { duplicate: true };
        }

        throw error;
    }
};

// Supprimer un favori
export const deleteFavorite = async (user_id, recipe_id) => {
    const deleteFavorite =
    "DELETE FROM favorites WHERE user_id = ? AND recipe_id = ?";

    const [response] = await bdd.query(deleteFavorite, [user_id, recipe_id]);
    return response;
};

// Obtenir les favoris d'un utilisateur
export const getFavoritesByUserId = async (user_id) => {
  const sql = `
  SELECT 
    favorites.recipe_id,
    recipes.title_recipe,
    recipes.image_png,
    recipes.description,
    recipes.preparation_time,
    recipes.cooking_time,
    recipes.categorie_id
  FROM favorites
  JOIN recipes ON favorites.recipe_id = recipes.id_recipe
  WHERE favorites.user_id = ?
`;
  const [response] = await bdd.query(sql, [user_id]);
  return response;
};
