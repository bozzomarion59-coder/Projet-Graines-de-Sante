import { useEffect, useState } from "react";

export default function RecipesAdmin() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/recipes/AllRecipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch(console.error);
  }, []);

  const handleDeleteRecipe = (id) => {
    if (!confirm("Supprimer cette recette ?")) return;

    const token = localStorage.getItem("token");

    fetch(`http://localhost:5001/api/recipes/deleteRecipe/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erreur lors de la suppression");
        }
        setRecipes(recipes.filter((r) => r.id_recipe !== id));
      })
      .catch(console.error);
  };

  return (
    <div>
      <h2 className="text-2xl font-titre mb-4">Gestion des recettes</h2>

      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-oliveGrise text-white">
            <th className="p-2">ID</th>
            <th className="p-2">Titre</th>
            <th className="p-2">Catégorie</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {recipes.map((r) => (
            <tr key={r.id_recipe} className="border-b">
              <td className="p-2">{r.id_recipe}</td>
              <td className="p-2">{r.title_recipe}</td>
              <td className="p-2">{r.categorie}</td>

              <td className="p-2 flex gap-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDeleteRecipe(r.id_recipe)}
                >
                  Supprimer
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

