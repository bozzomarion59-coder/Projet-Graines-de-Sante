export async function getAllRecettes() {
  try {
    const response = await fetch("http://localhost:5001/api/recipes/AllRecipes");
    return await response.json();
  } catch (error) {
    console.error("Erreur lors du chargement des recettes :", error);
    return [];
  }
}
