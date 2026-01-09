export async function getIngredientsByRecipeId(id) {
  try {
    const response = await fetch(
      `http://localhost:5001/api/ingredients/Recipe/${id}`
    );

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des ingrédients");
    }

    return await response.json();
  } catch (error) {
    console.error("Erreur getIngredientsByRecipeId :", error);
    return [];
  }
}
