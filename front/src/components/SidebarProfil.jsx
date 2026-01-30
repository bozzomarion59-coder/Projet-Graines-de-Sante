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
  localStorage.removeItem("user"); 
  setOpen(false);
  navigate("/connexion");
};


  return (
    <div className="relative">
      {/* BOUTON PROFIL EN DESKTOP */}
      <button
        onClick={() => setOpen(!open)}
        className="hidden md:flex items-center justify-center w-10 h-10 bg-vertSauvage text-white rounded-full text-xl"
      >
        👤
      </button>

      {/* BOUTON HAMBURGER EN MOBILE */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 bg-vertSauvage text-white rounded"
      >
        ☰
      </button>

      {/* MENU */}
      {open && (
        <ul className="absolute top-12 right-0 bg-white shadow-lg rounded p-4 w-48 z-50">
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
