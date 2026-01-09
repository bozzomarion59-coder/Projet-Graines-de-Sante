const API_URL = "http://localhost:5001/api/favorites";

export async function addFavorite(recipe_id) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ recipe_id }),
  });

  if (response.status === 409) {
    return { message: "Cette recette est déjà dans vos favoris" };
  }

  if (!response.ok) {
    return { message: "Erreur lors de l'ajout du favori" };
  }

  return response.json();
}

export async function getMyFavorites() {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/my-favorites`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
}

export async function deleteFavorite(recipe_id) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ recipe_id }),
  });

  return response.json();
}
