import { useEffect, useState } from "react";
import { getMyFavorites, deleteFavorite } from "../services/FavorisService";
import Cards from "../components/Cards";

export default function PageFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getMyFavorites().then((data) => {
      console.log("FAVORIS REÇUS FRONT :", data);
      setFavorites(data);
    });
  }, []);

  const handleDelete = async (recipe_id) => {
    await deleteFavorite(recipe_id);
    setFavorites(favorites.filter((fav) => fav.recipe_id !== recipe_id));
  };

  return (
    <div className="bg-beige min-h-screen px-6 py-12 font-texte text-grainCafe">
      <h1 className="text-3xl font-titre text-center mb-10">Mes Favoris</h1>

      {favorites.length === 0 ? (
        <p className="text-center text-oliveGrise">
          Vous n'avez encore ajouté aucune recette en favori.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {favorites.map((recette) => (
            <Cards
              key={recette.recipe_id}
              id_recipe={recette.recipe_id}
              image_png={recette.image_png}
              title_recipe={recette.title_recipe}
              description={recette.description}
              preparation_time={recette.preparation_time}
              cooking_time={recette.cooking_time}
              categorie={recette.categorie}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
