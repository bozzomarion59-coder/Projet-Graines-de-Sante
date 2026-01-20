import { useEffect, useState } from "react";

export default function RecipesAdmin() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-titre mb-4">Gestion des recettes</h2>

      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-oliveGrise text-white">
            <th className="p-2">ID</th>
            <th className="p-2">Titre</th>
            <th className="p-2">Catégorie</th>
          </tr>
        </thead>

        <tbody>
          {recipes.map((r) => (
            <tr key={r.id_recipe} className="border-b">
              <td className="p-2">{r.id_recipe}</td>
              <td className="p-2">{r.title_recipe}</td>
              <td className="p-2">{r.categorie}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
