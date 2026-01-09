import * as commentsModel from "../models/commentsModel.js";

// Obtenir tous les commentaires
export const getAllComments = async (req, res) => {
    try {
        const comments = await commentsModel.getAllComments();
        res.status(200).json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json("une erreur est survenue");
    }
};

// Obtenir tous les commentaires pour une recette par son id
export const getCommentsByRecipeId = async (req, res) => {
     const { id } = req.params;
    try {
        const comments = await commentsModel.getCommentsByRecipeId(id);
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la récupération des commentaires" });
    }
};

// Créer un nouveau commentaire pour une recette
export const createComment = async (req, res) => {
    const { user_id, recipe_id, content, create_at_comment } = req.body;
    try {
        const newComment = await commentsModel.createComment(user_id, recipe_id, content, create_at_comment);
        res.status(201).json(newComment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la création du commentaire" });
    }
};

// Supprimer un commentaire par son id
export const deleteCommentById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await commentsModel.deleteCommentById(id);
        
        if (result.affectedRows === 0) {
            return res.status(404).json("Commentaire non trouvé");
        }

        res.status(200).json("Commentaire supprimé avec succès");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la suppression du commentaire" });
    }
};
