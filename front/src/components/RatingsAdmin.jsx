import { useEffect, useState } from "react";

export default function RatingsAdmin() {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/ratings/AllRatings")
      .then((res) => res.json())
      .then((data) => setRatings(data));
  }, []);

  const handleDeleteRating = (id) => {
    if (!confirm("Supprimer cette note ?")) return;

    fetch(`http://localhost:5001/api/ratings/${id}`, {
      method: "DELETE",
    })
      .then(() => setRatings(ratings.filter((r) => r.id_rating !== id)))
      .catch(console.error);
  };

  return (
    <div>
      <h2 className="text-2xl font-titre mb-4">Gestion des notes</h2>

      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-oliveGrise text-white">
            <th className="p-2">ID</th>
            <th className="p-2">Utilisateur</th>
            <th className="p-2">Recette</th>
            <th className="p-2">Note</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {ratings.map((r) => (
            <tr key={r.id_rating} className="border-b">
              <td className="p-2 ">{r.user_id}-{r.recipe_id}</td>
              <td className="p-2">{r.user_id}</td>
              <td className="p-2">{r.recipe_id}</td>
              <td className="p-2">{r.value}</td>

              <td className="p-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDeleteRating(r.id_rating)}
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
