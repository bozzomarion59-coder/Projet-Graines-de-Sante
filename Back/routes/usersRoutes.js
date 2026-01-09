import * as usersControllers from '../controllers/usersControllers.js';
import checkToken from '../middlewares/checkToken.js';

import express from 'express';

const router = express.Router();

// Routes pour la gestion des utilisateurs
router.get('/AllUser', usersControllers.getAllUsers);

// Route pour obtenir un utilisateur par ID
router.get('/User/:id', usersControllers.getUserById);

// Route pour enregistrer un nouvel utilisateur
router.post('/register', usersControllers.registerUser);

// Route pour mettre à jour un utilisateur
router.put('/updateUser/:id', checkToken, usersControllers.updateUser);

// Route pour supprimer un utilisateur
router.delete('/deleteUser/:id', checkToken, usersControllers.deleteUser);

// Route pour la connexion d'un utilisateur
router.post('/login', usersControllers.loginUser);

export default router;
