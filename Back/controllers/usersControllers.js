import usersModel from '../models/usersModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Obtenir tous les utilisateurs
export const getAllUsers = async (req, res) => {
    try {
        const users = await usersModel.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json("une erreur est survenue");
    }
};

// Obtenir un utilisateur par ID
export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const userById = await usersModel.getUserById(id);
        res.status(200).json(userById);
    } catch (error) {
        res.status(500).json("une erreur est survenue", error);
    }
};

// Enregistrer un nouvel utilisateur
export const registerUser = async (req, res) => {
    console.log("inscription reçue", req.body);
    try {
        const { email_user, password_hash, pseudo_user, role_user } = req.body;

        // Vérifier si l'email existe déjà
        const existingUser = await usersModel.getUserByEmail(email_user);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: "Email déjà utilisé" });
        }

        const hashedPassword = await bcrypt.hash(password_hash, 10);

        // Création de l'utilisateur
        const result = await usersModel.createUser(
            email_user,
            hashedPassword,
            pseudo_user,
            role_user
        );

        res.status(201).json({ message: "Utilisateur créé avec succès", userId: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// Mettre à jour un utilisateur existant
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            email_user,
            password_hash,
            pseudo_user,
            role_user
        } = req.body;

        if (!email_user || !pseudo_user || !role_user) { 
            return res.status(400).json({ message: "Champs requis manquants" }); 
        }

        let hashedPassword = null;

       if (password_hash && password_hash.trim() !== "") { 
        hashedPassword = await bcrypt.hash(password_hash, 10); }

        await usersModel.updateUser(
            id,
            email_user,
            hashedPassword,
            pseudo_user,
            role_user,
        );

        res.json({ message: "Utilisateur mis à jour avec succès" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// Supprimer un utilisateur
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await usersModel.deleteUser(id);

        res.json({ message: "Utilisateur supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
        console.error(error);
    }
};

// Connexion d'un utilisateur
export const loginUser = async (req, res) => {
    try {
        const { email_user, password_hash } = req.body;

        const user = await usersModel.getUserByEmail(email_user);
        if (user.length === 0) {
            return res.status(400).json({ message: "Email ou mot de passe incorrect" });
        }

        const storedPassword = user[0].password_hash; let isPasswordValid = false;

        // Anciens utilisateurs (mot de passe en clair) 
        if (!storedPassword.startsWith("$2b$")) { 
            isPasswordValid = password_hash === storedPassword; } 
            
        // Nouveaux utilisateurs (hash bcrypt) 
        else { 
            isPasswordValid = await bcrypt.compare(password_hash, storedPassword); 
        } 
        if (!isPasswordValid) { 
            return res.status(400).json({ message: "Mot de passe incorrect" }); 
        }

        const token = jwt.sign(
            { id_user: user[0].id_user, role_user: user[0].role_user },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.status(200).json({ message: "Connexion réussie", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};