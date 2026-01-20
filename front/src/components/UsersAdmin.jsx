import { useEffect, useState } from "react";

export default function UsersAdmin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

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
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id_user} className="border-b">
              <td className="p-2">{u.id_user}</td>
              <td className="p-2">{u.email_user}</td>
              <td className="p-2">{u.pseudo_user}</td>
              <td className="p-2">{u.role_user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
