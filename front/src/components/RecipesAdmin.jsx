import { useEffect, useState } from "react";

export default function RecipesAdmin() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/recipes/AllRecipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleDeleteRecipe = (id) => {
    if (!confirm("Supprimer cette recette ?")) return;

    fetch(`http://localhost:5001/api/recipes/${id}`, {
      method: "DELETE",
    })
      .then(() => setRecipes(recipes.filter((r) => r.id_recipe !== id)))
      .catch(console.error);
  };

  const handleEditRecipe = (id) => {
    alert("Ajouter par la suite");
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
                  className="bg-mandarine text-white px-2 py-1 rounded"
                  onClick={() => handleEditRecipe(r.id_recipe)}
                >
                  Modifier
                </button>

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
