import { useEffect, useState } from "react";

export default function SupportAdmin() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/support/AllMessages")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  const updateStatus = (id, status) => {
    fetch(`http://localhost:5001/api/support/status/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then(() =>
        setMessages(
          messages.map((m) =>
            m.id_message === id ? { ...m, statut: status } : m
          )
        )
      )
      .catch(console.error);
  };

  return (
    <div>
      <h2 className="text-2xl font-titre mb-4">Messages de support</h2>

      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-oliveGrise text-white">
            <th className="p-2">ID</th>
            <th className="p-2">Nom</th>
            <th className="p-2">Email</th>
            <th className="p-2">Sujet</th>
            <th className="p-2">Message</th>
            <th className="p-2">Statut</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {messages.map((m) => (
            <tr key={m.id_message} className="border-b">
              <td className="p-2">{m.id_message}</td>
              <td className="p-2">{m.nom}</td>
              <td className="p-2">{m.email}</td>
              <td className="p-2">{m.sujet}</td>
              <td className="p-2">{m.contenu}</td>
              <td className="p-2">{m.statut}</td>

              <td className="p-2 flex gap-2">
                <button
                  className="bg-gray-400 text-white px-2 py-1 rounded"
                  onClick={() => updateStatus(m.id_message, "non traité")}
                >
                  Non traité
                </button>

                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                  onClick={() => updateStatus(m.id_message, "en cours")}
                >
                  En cours
                </button>

                <button
                  className="bg-green-600 text-white px-2 py-1 rounded"
                  onClick={() => updateStatus(m.id_message, "traité")}
                >
                  Traité
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
