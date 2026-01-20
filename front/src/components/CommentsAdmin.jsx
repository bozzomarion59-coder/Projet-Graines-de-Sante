import { useEffect, useState } from "react";

export default function CommentsAdmin() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

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
          </tr>
        </thead>

        <tbody>
          {comments.map((c) => (
            <tr key={c.id_comment} className="border-b">
              <td className="p-2">{c.id_comment}</td>
              <td className="p-2">{c.user_id}</td>
              <td className="p-2">{c.recipe_id}</td>
              <td className="p-2">{c.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
