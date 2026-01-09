import bdd from '../config/bdd.js';

// Obtenir toutes les catégories
export const getAllCategories = async () => {
    const getAllCategories =
    "SELECT id_categorie, name_categorie FROM categories_recipes";

    const [response] = await bdd.query(getAllCategories);
    return response;    
};

// Obtenir une catégorie par ID
export const getCategoryById = async (id) => {
    const getCategoryById =
    "SELECT id_categorie, name_categorie FROM categories_recipes WHERE id_categorie = ?";

    const [response] = await bdd.query(getCategoryById, [id]);
    return response;    
};

export default {
    getAllCategories,
    getCategoryById,
};