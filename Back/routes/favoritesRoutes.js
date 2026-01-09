import * as favoritesControllers from "../controllers/favoritesControllers.js";
import express from "express";
import checkToken from "../middlewares/checkToken.js";

const router = express.Router();

// Ajouter un favori
router.post("/add", checkToken, favoritesControllers.addFavorite);

// Supprimer un favori
router.delete("/delete", checkToken, favoritesControllers.deleteFavorite);

// Obtenir les favoris d'un utilisateur
router.get("/my-favorites", checkToken, favoritesControllers.getFavoritesByUserId);

export default router;