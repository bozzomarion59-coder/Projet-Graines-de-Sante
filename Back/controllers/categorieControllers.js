import categorieModel from "../models/categorieModel.js";

// Obtenir toutes les catégories
export const getAllCategories = async (req, res) => {
    try {
        const categories = await categorieModel.getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json("une erreur est survenue");
    }
};

// Obtenir une catégorie par ID
export const getCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const categoryById = await categorieModel.getCategoryById(id);
        if (!categoryById) {
            return res.status(404).json("Catégorie non trouvée");
        }   
        res.status(200).json(categoryById);
    } catch (error) {
        console.error(error);
        res.status(500).json("une erreur est survenue");
    }
};

