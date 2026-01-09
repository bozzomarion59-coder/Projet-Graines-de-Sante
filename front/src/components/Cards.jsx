import { Link, useNavigate } from "react-router-dom";
import { addFavorite } from "../services/FavorisService";
import { useState } from "react";

export default function Cards({
  id_recipe,
  image_png,
  title_recipe,
  description,
  preparation_time,
  cooking_time,
  categorie,
  onDelete
}) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [message, setMessage] = useState("");

  const handleFavoris = async () => {
    if (!token) {
      navigate("/connexion");
      return;
    }

    const result = await addFavorite(id_recipe);
    if (result?.message) { 
      setMessage(result.message); 
    } else { 
      setMessage("Recette ajoutée aux favoris !"); } 
      
      setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="glass-card">
      <img
        src={`/images/${image_png}`}
        alt={title_recipe}
        className="w-full h-48 object-cover object-center"
      />

      <div className="p-4 flex flex-col gap-3">
        <h2 className="text-lg text-center font-titre text-grainCafe">
          {title_recipe}
        </h2>

        {description && (
          <p className="text-sm text-center text-oliveGrise">{description}</p>
        )}

        <div className="flex items-center justify-between text-sm text-grainCafe mt-2">
          <div className="flex items-center gap-4">
            {preparation_time && <span>⏱️ {preparation_time} min</span>}
            {cooking_time && <span>🔥 {cooking_time} min</span>}
          </div>
          {categorie && (
            <span className="uppercase font-semibold text-vertSauvage">
              {categorie}
            </span>
          )}
        </div>

        <div className="flex justify-between mt-4">
          <Link to={`/recette/${id_recipe}`}>
            <button className="px-4 py-2 bg-mandarine text-white rounded hover:bg-vertSauvage transition">
              Voir plus
            </button>
          </Link>

          {onDelete ? (
            <button
              onClick={() => onDelete(id_recipe)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
            >
              Supprimer
            </button>
          ) : (
            <button
              onClick={handleFavoris}
              className="px-4 py-2 bg-vertSauvage text-white rounded hover:bg-mandarine transition"
            >
              Ajouter aux favoris
            </button>
          )}
        </div>

        {message && (
          <p className="text-mandarine text-center text-sm mt-2 font-semibold">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
