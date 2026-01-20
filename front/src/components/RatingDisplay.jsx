import { useEffect, useState } from "react";

export default function RatingDisplay({ recipeId }) {
  const [average, setAverage] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5001/api/ratings/recipe/${recipeId}/average`)
      .then((res) => res.json())
      .then((data) => {
        // Sécurisation : si pas de moyenne → 0
        setAverage(data?.average ?? 0);
      })
      .catch(() => setAverage(0));
  }, [recipeId]);

  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <h3 className="font-titre text-lg mb-2">Note moyenne</h3>

      <div className="flex justify-center gap-1 text-yellow-400 text-2xl">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star}>{star <= average ? "★" : "☆"}</span>
        ))}
      </div>

      <p className="text-sm text-oliveGrise mt-1">
        {Number(average).toFixed(1)} / 5
      </p>
    </div>
  );
}
