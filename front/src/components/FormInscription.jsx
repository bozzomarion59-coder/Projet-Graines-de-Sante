import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/InscriptionService";

export default function FormulaireInscription() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    pseudo_user: "",
    email_user: "",
    password_hash: "",
    role_user: "user",
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await registerUser(formData);

    if (result.message === "Utilisateur créé avec succès") {
      setSuccess(true);
      setMessage("Votre compte a été créé avec succès ! Redirection en cours…");

      // ⏳ Redirection après 2 secondes
      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } else {
      setSuccess(false);
      setMessage(result.message || "Erreur lors de l'inscription");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-beige font-texte">
      <div className="w-full max-w-md border border-vertSauvage p-6 rounded-lg shadow bg-white">
        <h1 className="text-2xl font-titre text-grainCafe mb-6 text-center">
          Créer un compte
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-grainCafe">Pseudo</label>
            <input
              type="text"
              name="pseudo_user"
              value={formData.pseudo_user}
              onChange={handleChange}
              className="w-full border border-oliveGrise px-3 py-2 rounded"
              placeholder="Votre pseudo"
            />
          </div>

          <div>
            <label className="block mb-1 text-grainCafe">Email</label>
            <input
              type="email"
              name="email_user"
              value={formData.email_user}
              onChange={handleChange}
              className="w-full border border-oliveGrise px-3 py-2 rounded"
              placeholder="Votre email"
            />
          </div>

          <div>
            <label className="block mb-1 text-grainCafe">Mot de passe</label>
            <input
              type="password"
              name="password_hash"
              value={formData.password_hash}
              onChange={handleChange}
              className="w-full border border-oliveGrise px-3 py-2 rounded"
              placeholder="Votre mot de passe"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded bg-mandarine text-grainCafe font-bouton hover:bg-vertSauvage transition"
          >
            S'inscrire
          </button>
        </form>

        {message && (
          <p
            className={`text-center mt-4 font-semibold ${
              success ? "text-vertSauvage" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-center mt-4 text-grainCafe">
          Déjà un compte ?
          <a href="/login" className="underline hover:text-mandarine">
            Se connecter
          </a>
        </p>
      </div>
    </div>
  );
}
