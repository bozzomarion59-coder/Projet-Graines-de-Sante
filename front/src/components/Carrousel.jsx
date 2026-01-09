import { useState } from "react";
import { Link } from "react-router-dom";

const recettes = [
  {
    id_recipe: 65,
    title: "Mousse végétale au chocolat",
    description: "Un dessert velouté et gourmand",
    image: "/images/mousse_chocolat.png",
    duration: "30 MIN",
    type: "DESSERT",
  },
  {
    id_recipe: 53,
    title: "Poulet savoureux aux herbes",
    description: "Une symphonie de saveurs",
    image: "/images/poulet_roti.png",
    duration: "40 MIN",
    type: "PLAT",
  },
  {
    id_recipe: 56,
    title: "Salade de quinoa",
    description: "Fraîcheur et équilibre",
    image: "/images/salade_quinoa.png",
    duration: "30 MIN",
    type: "ENTRÉE",
  },
];

export default function Carrousel() {
  const [current, setCurrent] = useState(0);
  const total = recettes.length;

  const next = () => setCurrent((current + 1) % total);
  const prev = () => setCurrent((current - 1 + total) % total);

  const recette = recettes[current];

  return (
    <div className="relative w-full max-w-3xl mx-auto flex items-center justify-center gap-6">
      <button
        onClick={prev}
        className="bg-mandarine text-white px-4 py-2 rounded-full hover:bg-orange-500 transition"
      >
        ‹
      </button>

      <div className="glass-carrousel">
        <img
          src={recette.image}
          alt={recette.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-6 text-grainCafe text-center">
          <h2 className="text-2xl font-titre mb-2">{recette.title}</h2>
          <p className="font-texte mb-4">{recette.description}</p>
          <p className="text-sm font-bouton mb-4">
            {recette.duration} – {recette.type}
          </p>
          <Link to={`/recette/${recette.id_recipe}`}>
            <button className="px-6 py-2 bg-mandarine text-white rounded hover:bg-orange-500 transition">
              Voir plus
            </button>
          </Link>
        </div>
      </div>

      <button
        onClick={next}
        className="bg-mandarine text-white px-4 py-2 rounded-full hover:bg-orange-500 transition"
      >
        ›
      </button>
    </div>
  );
}
