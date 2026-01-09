import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SidebarProfil() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  if (!isLoggedIn) return null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    setOpen(false);
    navigate("/connexion");
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 bg-vertSauvage text-white rounded"
      >
        ☰
      </button>

      {open && (
        <ul className="absolute top-12 left-0 bg-white shadow-lg rounded p-4 w-48">
          <li>
            <button
              onClick={() => navigate("/mes-favoris")}
              className="block w-full text-left px-4 py-2 hover:bg-beige hover:text-mandarine transition"
            >
              Mes favoris
            </button>
          </li>

          <li>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 hover:bg-beige hover:text-red-500 transition"
            >
              Déconnexion
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
