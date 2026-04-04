import axios from "axios";

export async function getAllRecettes() {
  try {
    const response = await axios.get("http://localhost:5001/api/recipes/AllRecipes");
    return response.data;
  } catch (error) {
    console.error("Erreur lors du chargement des recettes :", error);
    return [];
  }
}
