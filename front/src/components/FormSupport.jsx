import { useState } from "react";

export default function FormContact() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [sujet, setSujet] = useState("");
  const [contenu, setContenu] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!email || !sujet || !contenu) {
      setMessage("Veuillez remplir tous les champs.");
      return;
    }

    fetch("http://localhost:5001/api/support/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nom, email, sujet, contenu }),
    })
      .then((res) => res.json())
      .then(() => {
        setMessage("Votre message a bien été envoyé !");
        setNom("");
        setEmail("");
        setSujet("");
        setContenu("");
      })
      .catch(() => setMessage("Erreur lors de l’envoi."));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-beige font-texte">
      <div className="w-full max-w-md border border-vertSauvage p-6 rounded-lg shadow bg-white">
        <h1 className="text-2xl font-titre text-grainCafe mb-6 text-center">
          Contactez-nous
        </h1>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>

          <div>
            <label className="block mb-1 text-grainCafe">Nom</label>
            <input
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="w-full border border-oliveGrise px-3 py-2 rounded"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label className="block mb-1 text-grainCafe">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-oliveGrise px-3 py-2 rounded"
              placeholder="Votre email"
            />
          </div>

          <div>
            <label className="block mb-1 text-grainCafe">Sujet</label>
            <input
              type="text"
              value={sujet}
              onChange={(e) => setSujet(e.target.value)}
              className="w-full border border-oliveGrise px-3 py-2 rounded"
              placeholder="Sujet"
            />
          </div>

          <div>
            <label className="block mb-1 text-grainCafe">Message</label>
            <textarea
              value={contenu}
              onChange={(e) => setContenu(e.target.value)}
              className="w-full border border-oliveGrise px-3 py-2 rounded h-32 resize-none"
              placeholder="Votre message..."
            ></textarea>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-2 rounded bg-mandarine text-grainCafe font-bouton hover:bg-vertSauvage transition"
          >
            Envoyer
          </button>
        </form>

        {message && (
          <p className="text-center mt-4 text-oliveGrise">{message}</p>
        )}
      </div>
    </div>
  );
}
