export async function getRecetteById(id) {
  try {
    const response = await fetch(`http://localhost:5001/api/recipes/Recipe/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur dans getRecetteById :", error);
    return null;
  }
}
