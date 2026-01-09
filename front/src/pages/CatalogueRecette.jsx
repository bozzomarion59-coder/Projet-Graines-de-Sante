import { useEffect, useState } from "react";
import Cards from "../components/Cards";

export default function CatalogueRecette() {
    const [recettes, setRecettes] = useState([]);
    const [categorieFiltre, setCategorieFiltre] = useState("all");

    // Récupération des recettes depuis le backend
    useEffect(() => {
        fetch("http://localhost:5001/api/recipes/AllRecipes")
            .then((res) => res.json())
            .then((data) => setRecettes(data))
            .catch((err) => console.error("Erreur :", err));
    }, []);

    // Filtrage des recettes
    const recettesFiltrees =
        categorieFiltre === "all"
            ? recettes
            : recettes.filter((r) => r.categorie === categorieFiltre);

    return (
        <div className="bg-beige min-h-screen px-6 py-12 font-texte text-grainCafe">
            <h1 className="text-3xl font-titre text-center mb-10">
                Catalogue des Recettes
            </h1>

            {/* FILTRES */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button
                    onClick={() => setCategorieFiltre("all")}
                    className={`px-4 py-2 rounded ${categorieFiltre === "all"
                            ? "bg-vertSauvage text-white"
                            : "bg-white border border-vertSauvage text-vertSauvage"
                        }`}
                >
                    Tous
                </button>

                <button
                    onClick={() => setCategorieFiltre("entree")}
                    className={`px-4 py-2 rounded ${categorieFiltre === "entree"
                            ? "bg-vertSauvage text-white"
                            : "bg-white border border-vertSauvage text-vertSauvage"
                        }`}
                >
                    Entrées
                </button>

                <button
                    onClick={() => setCategorieFiltre("plat")}
                    className={`px-4 py-2 rounded ${categorieFiltre === "plat"
                            ? "bg-vertSauvage text-white"
                            : "bg-white border border-vertSauvage text-vertSauvage"
                        }`}
                >
                    Plats
                </button>

                <button
                    onClick={() => setCategorieFiltre("dessert")}
                    className={`px-4 py-2 rounded ${categorieFiltre === "dessert"
                            ? "bg-vertSauvage text-white"
                            : "bg-white border border-vertSauvage text-vertSauvage"
                        }`}
                >
                    Desserts
                </button>

                <button
                    onClick={() => setCategorieFiltre("boisson")}
                    className={`px-4 py-2 rounded ${categorieFiltre === "boisson"
                            ? "bg-vertSauvage text-white"
                            : "bg-white border border-vertSauvage text-vertSauvage"
                        }`}
                >
                    Boissons
                </button>
            </div>

            {/* LISTE DES RECETTES */}
            <div className="grid md:grid-cols-3 gap-8">
                {recettesFiltrees.map((recette) => (
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
        </div>
    );
}
