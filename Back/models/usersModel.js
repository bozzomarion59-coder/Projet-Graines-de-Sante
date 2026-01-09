import bdd from '../config/bdd.js';

export const getAllUsers = async () => {
    const getAllUsers = 
    "SELECT id_user, email_user, password_hash, pseudo_user, role_user, create_at_user FROM users";

    const [response] = await bdd.query(getAllUsers);
    return response;
};

export const getUserById = async (id) => {
    const getUserById = 
    "SELECT id_user, email_user, password_hash, pseudo_user, role_user, create_at_user FROM users WHERE id_user = ?";

    const [response] = await bdd.query(getUserById, [id]);
    return response;
};

export const createUser = async (email, passwordHash, pseudo, role = "user") => {
    const createUser = 
    "INSERT INTO users (email_user, password_hash, pseudo_user, role_user) VALUES (?, ?, ?, ?)";

    const [response] = await bdd.query(createUser, [email, passwordHash, pseudo, role]);
    return response;
};

export const updateUser = async (id, email, passwordHash, pseudo, role) => {
    const updateUser = 
    "UPDATE users SET email_user = ?, password_hash = ?, pseudo_user = ?, role_user = ?  WHERE id_user = ?";

    const [response] = await bdd.query(updateUser, [email, passwordHash, pseudo, role, id]);
    return response;
};

export const deleteUser = async (id) => {
    const deleteUser = 
    "DELETE FROM users WHERE id_user = ?";

    const [response] = await bdd.query(deleteUser, [id]);
    return response;
};

export const getUserByEmail = async (email) => {
    const getUserByEmail = 
    "SELECT id_user, email_user, password_hash, pseudo_user, role_user, create_at_user FROM users WHERE email_user = ?";

    const [response] = await bdd.query(getUserByEmail, [email]);
    return response;
};      

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserByEmail,
};