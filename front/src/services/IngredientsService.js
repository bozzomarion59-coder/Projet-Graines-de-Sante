import axios from "axios";

export async function getIngredientsByRecipeId(id) {
  try {
    const response = await axios.get(
      `http://localhost:5001/api/ingredients/Recipe/${id}`
    );

    return response.data;
  } catch (error) {
    console.error("Erreur getIngredientsByRecipeId :", error);
    return [];
  }
}
