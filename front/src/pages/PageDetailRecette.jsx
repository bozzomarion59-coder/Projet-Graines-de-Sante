import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getIngredientsByRecipeId } from "../services/IngredientsService";
import { addFavorite } from "../services/FavorisService";

export default function PageDetailRecette() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recette, setRecette] = useState(null);
  const [error, setError] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [message, setMessage] = useState("");

  const isLogged = localStorage.getItem("token");

  const handleFavoris = async () => {
    if (!isLogged) {
      navigate("/connexion");
      return;
    }

    const result = await addFavorite(recette.id_recipe);
    if (result?.message) {
      setMessage(result.message);
    } else {
      setMessage("Recette ajoutée aux favoris !");
    }
    setTimeout(() => setMessage(""), 2000);
  };

  useEffect(() => {
    fetch(`http://localhost:5001/api/recipes/Recipe/${id}`)
      .then((res) => res.json())
      .then((data) => setRecette(data))
      .catch(() => setError(true));
  }, [id]);

  useEffect(() => {
    getIngredientsByRecipeId(id).then((data) => setIngredients(data));
  }, [id]);

  if (error) return <p className="text-center mt-20 text-red-600">Impossible de charger la recette.</p>;
  if (!recette) return <p className="text-center mt-20">Chargement...</p>;

  return (
    <div className="bg-beige min-h-screen font-texte text-grainCafe px-6 py-12">

      <div className="max-w-4xl mx-auto mb-8">
        <img
          src={`/images/${recette.image_png}`}
          alt={recette.title_recipe}
          className="w-full h-96 object-cover rounded-lg shadow"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-titre mb-4">{recette.title_recipe}</h1>

        <div className="flex justify-center gap-6 text-sm font-bouton">
          <span>⏱️ {recette.preparation_time} min</span>
          {recette.cooking_time && <span>🔥 {recette.cooking_time} min</span>}
          <span>🍽️ {recette.categorie?.toUpperCase()}</span>
        </div>

        <button
          onClick={handleFavoris}
          className="mt-6 px-6 py-3 bg-vertSauvage text-white rounded-lg hover:bg-mandarine transition"
        >
          + Favoris
        </button>

        {message && (
          <p className="text-mandarine mt-3 font-semibold">{message}</p>
        )}
      </div>

      <section className="max-w-3xl mx-auto mb-10">
        <h2 className="text-xl font-titre mb-2">DESCRIPTION</h2>
        <p className="text-oliveGrise">{recette.description}</p>
      </section>

      <section className="max-w-3xl mx-auto mb-10">
        <h2 className="text-xl font-titre mb-2">INGRÉDIENTS</h2>
        <ul className="list-disc list-inside text-oliveGrise leading-relaxed">
          {ingredients.map((item) => (
            <li key={item.id_ingredient}>
              {item.quantity} — {item.name_ingredient}
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-3xl mx-auto mb-10">
        <h2 className="text-xl font-titre mb-2">INSTRUCTIONS</h2>
        <ol className="list-decimal list-inside text-oliveGrise leading-relaxed">
          {recette.instructions?.split("\n").map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}
