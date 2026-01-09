import * as favoritesModel from "../models/favoritesModel.js";

// Ajouter un favori pour l'utilisateur
export const addFavorite = async (req, res) => {
    const user_id = req.user.id_user;
    const { recipe_id } = req.body;

    try {
        const newFavorite = await favoritesModel.addFavorite(user_id, recipe_id);

        // Si doublon, message à l'utilisateur
        if (newFavorite.duplicate) {
            return res.status(409).json({ message: "Cette recette est déjà dans vos favoris" });
        }

        res.status(201).json({ message: "Favori ajouté avec succès" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de l'ajout du favori" });
    }
};

// Supprimer un favori
export const deleteFavorite = async (req, res) => {
    const user_id = req.user.id_user;
    const { recipe_id } = req.body;

    try {
        const result = await favoritesModel.deleteFavorite(user_id, recipe_id);
        res.status(200).json("Favori supprimé avec succès");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la suppression du favori" });
    }
};

// Obtenir les favoris d'un utilisateur
export const getFavoritesByUserId = async (req, res) => {
    const user_id = req.user.id_user;

    try {
        const favorites = await favoritesModel.getFavoritesByUserId(user_id);
        res.status(200).json(favorites);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la récupération des favoris" });
    }
};
