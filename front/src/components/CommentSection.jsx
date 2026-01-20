import { useState } from "react";

export default function CommentSection({ recipeId }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const token = localStorage.getItem("token");

  if (!token) return null;

  // Extraction du user_id depuis le token JWT
  let user_id = null;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    user_id = payload.id_user; // ⚠ doit correspondre à ce que tu mets dans ton token côté back
  } catch (error) {
    console.error("Erreur lors de la lecture du token :", error);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user_id) {
      alert("Impossible de récupérer votre identifiant utilisateur.");
      return;
    }

    // 1) Envoi du commentaire
    const commentResponse = await fetch("http://localhost:5001/api/comments/CreateComment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id,
        recipe_id: recipeId,
        content: comment,
      }),
    });

    // 2) Envoi de la note
    const ratingResponse = await fetch("http://localhost:5001/api/ratings/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id,
        recipe_id: recipeId,
        value: rating,
      }),
    });

    if (!commentResponse.ok || !ratingResponse.ok) {
      alert("Erreur lors de l’envoi de votre avis.");
      return;
    }

    setRating(0);
    setComment("");
    alert("Merci pour votre avis !");
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-titre text-lg mb-3">Votre avis</h3>

      {/* Étoiles */}
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className={`text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
          >
            ★
          </button>
        ))}
      </div>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Votre commentaire..."
        className="w-full p-2 border rounded mb-4"
        rows={4}
      />

      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-mandarine text-white rounded hover:bg-orange-500 transition"
      >
        Envoyer
      </button>
    </div>
  );
}
