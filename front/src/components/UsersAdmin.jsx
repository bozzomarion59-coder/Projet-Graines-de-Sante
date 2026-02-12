import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UsersAdmin() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5001/api/users/AllUser")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(console.error);
  }, []);

  const handleDeleteUser = (id) => {
    if (!confirm("Supprimer cet utilisateur ?")) return;

    const token = localStorage.getItem("token");

    fetch(`http://localhost:5001/api/users/deleteUser/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors de la suppression");
        setUsers(users.filter((u) => u.id_user !== id));
      })
      .catch(console.error);
  };

  const handleEditUser = (id) => {
    navigate(`/admin/edit-user/${id}`);
  };

  return (
    <div>
      <h2 className="text-2xl font-titre mb-4">Gestion des utilisateurs</h2>

      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-oliveGrise text-white">
            <th className="p-2">ID</th>
            <th className="p-2">Email</th>
            <th className="p-2">Pseudo</th>
            <th className="p-2">Rôle</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id_user} className="border-b">
              <td className="p-2">{u.id_user}</td>
              <td className="p-2">{u.email_user}</td>
              <td className="p-2">{u.pseudo_user}</td>
              <td className="p-2">{u.role_user}</td>

              <td className="p-2 flex gap-2">
                <button
                  className="bg-mandarine text-white px-2 py-1 rounded"
                  onClick={() => handleEditUser(u.id_user)}
                >
                  Modifier
                </button>

                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDeleteUser(u.id_user)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}