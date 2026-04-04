import axios from "axios";

const API_URL = "http://localhost:5001/api/favorites";

export async function addFavorite(recipe_id) {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.post(`${API_URL}/add`, { recipe_id }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    if (error.response?.status === 409) {
      return { message: "Cette recette est déjà dans vos favoris" };
    }
    return { message: "Erreur lors de l'ajout du favori" };
  }
}

export async function getMyFavorites() {
  const token = localStorage.getItem("token");

  const response = await axios.get(`${API_URL}/my-favorites`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function deleteFavorite(recipe_id) {
  const token = localStorage.getItem("token");

  const response = await axios.delete(`${API_URL}/delete`, {
    headers: { Authorization: `Bearer ${token}` },
    data: { recipe_id },
  });
  return response.data;
}
