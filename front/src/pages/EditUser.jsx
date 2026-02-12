import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5001/api/users/User/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEmail(data.email_user);
        setPseudo(data.pseudo_user);
        setRole(data.role_user);
      })
      .catch(console.error);
  }, [id]);

  const handleSubmit = () => {
    const token = localStorage.getItem("token");

    fetch(`http://localhost:5001/api/users/updateUser/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        email_user: email,
        pseudo_user: pseudo,
        role_user: role,
        password_hash: password, // vide = on garde l'ancien
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setMessage("Utilisateur modifié !");
        setTimeout(() => navigate("/admin"), 1000);
      })
      .catch(() => setMessage("Erreur lors de la modification"));
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow rounded">
      <h2 className="text-2xl font-titre mb-4">Modifier un utilisateur</h2>

      <input
        type="email"
        className="border px-3 py-2 rounded w-full mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        className="border px-3 py-2 rounded w-full mb-3"
        value={pseudo}
        onChange={(e) => setPseudo(e.target.value)}
      />

      <select
        className="border px-3 py-2 rounded w-full mb-3"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="user">Utilisateur</option>
        <option value="admin">Admin</option>
      </select>

      <input
        type="password"
        placeholder="Nouveau mot de passe (optionnel)"
        className="border px-3 py-2 rounded w-full mb-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-mandarine text-white px-4 py-2 rounded"
      >
        Enregistrer
      </button>

      {message && <p className="text-center mt-2">{message}</p>}
    </div>
  );
}

