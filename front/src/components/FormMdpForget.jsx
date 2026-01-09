import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../services/InscriptionService";

export default function FormMdpForget() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email_user: "",
    new_password: "",
    confirm_password: "",
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.new_password !== formData.confirm_password) {
      setSuccess(false);
      setMessage("Les mots de passe ne correspondent pas");
      return;
    }

    const result = await resetPassword({
      email_user: formData.email_user,
      new_password: formData.new_password,
    });

    if (result.message === "Mot de passe mis à jour avec succès") {
      setSuccess(true);
      setMessage("Mot de passe mis à jour ! Redirection…");

      setTimeout(() => {
        navigate("/connexion");
      }, 1500);
    } else {
      setSuccess(false);
      setMessage(result.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-beige font-texte">
      <div className="w-full max-w-md border border-vertSauvage p-6 rounded-lg shadow bg-white">
        <h1 className="text-2xl font-titre text-grainCafe mb-6 text-center">
          Réinitialiser mon mot de passe
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-grainCafe">Adresse email</label>
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
            <label className="block mb-1 text-grainCafe">Nouveau mot de passe</label>
            <input
              type="password"
              name="new_password"
              value={formData.new_password}
              onChange={handleChange}
              className="w-full border border-oliveGrise px-3 py-2 rounded"
              placeholder="Nouveau mot de passe"
            />
          </div>

          <div>
            <label className="block mb-1 text-grainCafe">Confirmer le mot de passe</label>
            <input
              type="password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              className="w-full border border-oliveGrise px-3 py-2 rounded"
              placeholder="Confirmer le mot de passe"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded bg-mandarine text-grainCafe font-bouton hover:bg-vertSauvage transition"
          >
            Réinitialiser
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

        <p className="text-center mt-4">
          <a href="/connexion" className="underline text-grainCafe hover:text-mandarine">
            Retour à la connexion
          </a>
        </p>
      </div>
    </div>
  );
}
