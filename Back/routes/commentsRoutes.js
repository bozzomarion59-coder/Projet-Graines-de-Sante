import * as commentsController from '../controllers/commentsController.js';
import express from 'express';  

const router = express.Router();

// Route pour obtenir tous les commentaires
router.get('/AllComments', commentsController.getAllComments);

// Route pour obtenir les commentaires d'une recette par son id
router.get('/CommentsByRecipe/:id', commentsController.getCommentsByRecipeId);

// Route pour supprimer un commentaire par son id
router.delete('/DeleteComment/:id', commentsController.deleteCommentById);  

// Route pour créer un nouveau commentaire
router.post('/CreateComment', commentsController.createComment);

export default router;