import { useEffect, useState } from "react";

export default function CommentsAdmin() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/comments/AllComments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  const handleDeleteComment = (id) => {
    if (!confirm("Supprimer ce commentaire ?")) return;

    fetch(`http://localhost:5001/api/recipes/${id}`, {
      method: "DELETE",
    })
      .then(() => setRecipes(recipes.filter((r) => r.id_recipe !== id)))
      .catch(console.error);
  };

  const handleEditComment = (id) => {
    alert("Ajouter par la suite");
  };

  return (
    <div>
      <h2 className="text-2xl font-titre mb-4">Gestion des commentaires</h2>

      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-oliveGrise text-white">
            <th className="p-2">ID</th>
            <th className="p-2">Utilisateur</th>
            <th className="p-2">Recette</th>
            <th className="p-2">Commentaire</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {comments.map((c) => (
            <tr key={c.id_comment} className="border-b">
              <td className="p-2">{c.id_comment}</td>
              <td className="p-2">{c.user_id}</td>
              <td className="p-2">{c.recipe_id}</td>
              <td className="p-2">{c.content}</td>
              <td className="p-2 flex gap-2">
                <button
                  className="bg-mandarine text-white px-2 py-1 rounded"
                  onClick={() => handleEditComment(c.id_comment)}
                >
                  Modifier
                </button>

                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDeleteComment(c.id_comment)}
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
