import Cards from "../components/Cards";
import Carrousel from "../components/Carrousel";
import HeroHeader from "../components/HeroHeader";

export default function PageAccueil() {
  const nouveautes = [
    {
      id_recipe: 46,
      image_png: "salade_concombre.png",
      title_recipe: "Salade de concombre au yaourt",
      description: "Entrée légère et rafraîchissante",
      preparation_time: 10,
      cooking_time: null,
      categorie: "entrée",
    },
    {
      id_recipe: 53,
      image_png: "poulet_roti.png",
      title_recipe: "Poulet rôti aux herbes",
      description: "Plat familial économique",
      preparation_time: 10,
      cooking_time: 45,
      categorie: "plat",
    },
    {
      id_recipe: 65,
      image_png: "mousse_chocolat.png",
      title_recipe: "Mousse au chocolat sans gluten",
      description: "Dessert gourmand",
      preparation_time: 15,
      cooking_time: 2,
      categorie: "dessert",
    },
    {
      id_recipe: 72,
      image_png: "smoothie_banane_fraise.png",
      title_recipe: "Smoothie banane fraise",
      description: "Boisson fraîche et vitaminée",
      preparation_time: 5,
      cooking_time: null,
      categorie: "boisson",
    },
  ];

  return (
    <div className="bg-beige min-h-screen font-texte text-grainCafe">
      <HeroHeader />

      <div className="px-6 py-12">
        {/* TOP 3 */}
        <section className="mb-16">
          <h2 className="text-2xl font-titre text-grainCafe mb-6 text-center">
            Top 3 du moment :
          </h2>
          <Carrousel />
        </section>

        {/* NOUVEAUTÉS */}
        <section>
          <h2 className="text-2xl font-titre text-grainCafe mb-6 text-center">
            Nouveautés :
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {nouveautes.map((recette) => (
              <Cards
                key={recette.id_recipe}
                id_recipe={recette.id_recipe}
                image_png={recette.image_png}
                title_recipe={recette.title_recipe}
                description={recette.description}
                preparation_time={recette.preparation_time}
                cooking_time={recette.cooking_time}
                categorie={recette.categorie}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
