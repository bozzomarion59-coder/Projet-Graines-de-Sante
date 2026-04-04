import axios from "axios";

const API_URL = "http://localhost:5001/api/users";

export async function loginUser(data) {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data;
  } catch (error) {
    return error.response?.data || { message: "Erreur lors de la connexion" };
  }
}

export async function registerUser(data) {
  try {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
  } catch (error) {
    return error.response?.data || { message: "Erreur lors de l'inscription" };
  }
}

export async function resetPassword(data) {
  try {
    const response = await axios.post(`${API_URL}/reset-password`, data);
    return response.data;
  } catch (error) {
    return error.response?.data || { message: "Erreur lors de la réinitialisation" };
  }
}
