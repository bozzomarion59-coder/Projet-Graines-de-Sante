import { useState } from "react";

export default function FormAddRecipe() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.role_user !== "admin") {
    return (
      <div className="text-center mt-10 text-red-600">
        Accès refusé — réservé aux administrateurs.
      </div>
    );
  }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [message, setMessage] = useState("");

  const handleIngredientChange = (value, index) => {
    const newList = [...ingredients];
    newList[index] = value;
    setIngredients(newList);
  };

  const addIngredient = () => setIngredients([...ingredients, ""]);
  const removeIngredient = (index) =>
    setIngredients(ingredients.filter((_, i) => i !== index));

  const handleSubmit = () => {
    if (!title || !description || !instructions || !category || !prepTime) {
      setMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    // On fusionne les ingrédients dans la description
    const fullDescription =
      description +
      "\n\nIngrédients :\n" +
      ingredients.map((i) => "- " + i).join("\n");

    fetch("http://localhost:5001/api/recipes/createRecipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        categorie_id: category,
        title_recipe: title,
        description: fullDescription,
        instructions,
        image_png: image,
        preparation_time: prepTime,
        cooking_time: cookTime || 0,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setMessage("Recette ajoutée !");
        setTitle("");
        setDescription("");
        setInstructions("");
        setCategory("");
        setPrepTime("");
        setCookTime("");
        setIngredients([""]);
        setImage("");
      })
      .catch(() => setMessage("Erreur lors de l’envoi."));
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow rounded">
      <h2 className="text-2xl font-titre mb-4">Ajouter une recette</h2>

      <div className="flex flex-col gap-4">

        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-3 py-2 rounded"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border px-3 py-2 rounded h-24"
        />

        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="border px-3 py-2 rounded h-32"
        />

        <div>
          <label className="block mb-1">Catégorie</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Sélectionnez une catégorie</option>
            <option value="1">Entrée</option>
            <option value="2">Plat</option>
            <option value="3">Dessert</option>
            <option value="4">Boisson</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Nom du fichier image (ex: gateau.png)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border px-3 py-2 rounded"
        />

        <input
          type="number"
          placeholder="Temps de préparation (min)"
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
          className="border px-3 py-2 rounded"
        />

        <input
          type="number"
          placeholder="Temps de cuisson (min)"
          value={cookTime}
          onChange={(e) => setCookTime(e.target.value)}
          className="border px-3 py-2 rounded"
        />

        <div>
          <label className="block mb-1">Ingrédients</label>

          {ingredients.map((ing, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={ing}
                onChange={(e) => handleIngredientChange(e.target.value, index)}
                className="border px-3 py-2 rounded flex-1"
                placeholder={`Ingrédient ${index + 1}`}
              />

              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeIngredient(index)}
                  className="bg-red-500 text-white px-2 rounded"
                >
                  X
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={addIngredient}
            className="bg-vertSauvage text-white px-3 py-1 rounded"
          >
            + Ajouter un ingrédient
          </button>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-mandarine text-white px-4 py-2 rounded"
        >
          Ajouter
        </button>

        {message && <p className="text-center mt-2">{message}</p>}
      </div>
    </div>
  );
}
