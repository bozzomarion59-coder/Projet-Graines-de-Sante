import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/InscriptionService";

export default function FormConnexion() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email_user: "",
    password_hash: "",
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await loginUser(formData);

    if (result.token) {
      setSuccess(true);
      setMessage("Connexion réussie ! Redirection en cours…");

      localStorage.setItem("token", result.token);

      setTimeout(() => {
        navigate("/");
      }, 1500);

    } else {
      setSuccess(false);
      setMessage(result.message || "Erreur de connexion");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-beige font-texte">
      <div className="w-full max-w-md border border-vertSauvage p-6 rounded-lg shadow bg-white">
        <h1 className="text-2xl font-titre text-grainCafe mb-6 text-center">
          Se connecter
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

          <div>
            <label className="block mb-1 text-grainCafe">Email</label>
            <input
              type="email"
              name="email_user"
              value={formData.email_user}
              onChange={handleChange}
              className="w-full border border-oliveGrise px-3 py-2 rounded focus:border-vertSauvage focus:ring-vertSauvage"
              placeholder="exemple@mail.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-grainCafe">Mot de passe</label>
            <input
              type="password"
              name="password_hash"
              value={formData.password_hash}
              onChange={handleChange}
              className="w-full border border-oliveGrise px-3 py-2 rounded focus:border-vertSauvage focus:ring-vertSauvage"
              placeholder="Votre mot de passe"
            />
          </div>

          <Link to="/mdp-forget" className="text-mandarine hover:underline">
            Mot de passe oublié ?
          </Link>

          <button
            type="submit"
            className="w-full py-2 rounded bg-mandarine text-grainCafe font-bouton hover:bg-vertSauvage transition"
          >
            Se connecter
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
          Pas encore de compte ?
          <a href="/inscription" className="underline hover:text-mandarine">
            S'inscrire
          </a>
        </p>
      </div>
    </div>
  );
}
