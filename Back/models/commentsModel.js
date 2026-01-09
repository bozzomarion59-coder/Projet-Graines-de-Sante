import bdd from '../config/bdd.js';

// Obtenir tous les commentaires
export const getAllComments = async () => {
    const getAllComments =
    `SELECT user_id, recipe_id, content, create_at_comment
    FROM comments`;

    const [response] = await bdd.query(getAllComments);
    return response;
};

// Obtenir tous les commentaires pour une recette par son id
export const getCommentsByRecipeId = async (id) => {
    const getCommentsByRecipeId =
    `SELECT user_id, recipe_id, content, create_at_comment
        FROM comments
        WHERE recipe_id = ?`
        ;
        
    const [response] = await bdd.query(getCommentsByRecipeId, [id]);
    return response;    
};  

// Créer un nouveau commentaire pour une recette
export const createComment = async (user_id, recipe_id, content) => {
    const createComment =
    "INSERT INTO comments (user_id, recipe_id, content) VALUES (?, ?, ? )";

    const [response] = await bdd.query(createComment, [user_id, recipe_id, content]);
    return response;    
};

// suppprimer un commentaire par son id
export const deleteCommentById = async (id) => {
    const deleteCommentById =
    "DELETE FROM comments WHERE id_comment = ?";

    const [response] = await bdd.query(deleteCommentById, [id]);
    return response;    
};  

