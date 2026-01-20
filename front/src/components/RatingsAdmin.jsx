import { useEffect, useState } from "react";

export default function RatingsAdmin() {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/ratings")
      .then((res) => res.json())
      .then((data) => setRatings(data));
  }, []);

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
          </tr>
        </thead>

        <tbody>
          {ratings.map((r) => (
            <tr key={r.id_rating} className="border-b">
              <td className="p-2">{r.id_rating}</td>
              <td className="p-2">{r.user_id}</td>
              <td className="p-2">{r.recipe_id}</td>
              <td className="p-2">{r.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
