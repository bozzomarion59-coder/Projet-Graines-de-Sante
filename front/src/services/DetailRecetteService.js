import axios from "axios";

export async function getRecetteById(id) {
  try {
    const response = await axios.get(`http://localhost:5001/api/recipes/Recipe/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur dans getRecetteById :", error);
    return null;
  }
}
