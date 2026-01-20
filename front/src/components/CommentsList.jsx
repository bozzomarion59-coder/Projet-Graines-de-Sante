import { useEffect, useState } from "react";

export default function CommentsList({ recipeId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/api/comments/CommentsByRecipe/${recipeId}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [recipeId]);

  if (comments.length === 0)
    return <p className="text-center text-oliveGrise">Aucun commentaire pour le moment.</p>;

  return (
    <div className="max-w-3xl mx-auto mb-10">
      <h2 className="text-xl font-titre mb-4">Commentaires</h2>

      {comments.map((c) => (
        <div key={c.id_comment} className="border p-3 rounded mb-3 bg-white shadow">
          <p className="font-semibold">Utilisateur {c.user_id}</p>
          <p className="text-oliveGrise">{c.content}</p>
          <p className="text-xs text-gray-400">{c.create_at_comment}</p>
        </div>
      ))}
    </div>
  );
}
