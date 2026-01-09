import * as categorieControllers from '../controllers/categorieControllers.js';
import express from 'express';


const router = express.Router();

// Route pour obtenir toutes les catégories
router.get('/AllCategories', categorieControllers.getAllCategories);

// Route pour obtenir une catégorie par ID
router.get('/Category/:id', categorieControllers.getCategoryById);

export default router;  