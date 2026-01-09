import { useState } from "react";
import { Link } from "react-router-dom";
import logoMB from "../assets/logoMB.png";
import SidebarProfil from "../components/SidebarProfil";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  // Vérifie si l'utilisateur est connecté
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  return (
    <nav className="w-full border-b border-vertSauvage bg-beige px-4 py-3 font-texte text-grainCafe">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logoMB} alt="Logo MB" className="h-8 w-8 object-contain" />
          <span className="text-xl font-titre text-grainCafe">Graines de Santé</span>
        </Link>

        {/* BOUTON MOBILE */}
        <button
          className="md:hidden text-grainCafe"
          onClick={() => setOpen(!open)}
        >
          <span className="text-2xl">☰</span>
        </button>

        {/* DESKTOP */}
        <ul className="hidden md:flex items-center gap-6">
          <li><Link to="/" className="hover:text-mandarine transition">Accueil</Link></li>
          <li><Link to="/catalogue" className="hover:text-mandarine transition">Catalogue</Link></li>
          <li><Link to="/support" className="hover:text-mandarine transition">Contact</Link></li>

          {/* SI CONNECTÉ → SidebarProfil */}
          {isLoggedIn ? (
            <li>
              <SidebarProfil />
            </li>
          ) : (
            /* SINON → Bouton Connexion */
            <li>
              <Link
                to="/connexion"
                className="px-4 py-2 rounded-md bg-mandarine text-white font-bouton hover:bg-orange-500 transition"
              >
                Connexion
              </Link>
            </li>
          )}
        </ul>
      </div>

      {/* MOBILE */}
      {open && (
        <ul className="md:hidden mt-3 flex flex-col gap-3 text-grainCafe">
          <li><Link to="/" className="block hover:text-mandarine transition">Accueil</Link></li>
          <li><Link to="/catalogue" className="block hover:text-mandarine transition">Catalogue</Link></li>
          <li><Link to="/support" className="block hover:text-mandarine transition">Contact</Link></li>

          {/* MOBILE : Connexion ou SidebarProfil */}
          {isLoggedIn ? (
            <li className="px-2">
              <SidebarProfil />
            </li>
          ) : (
            <li>
              <Link
                to="/connexion"
                className="block text-center px-4 py-2 rounded-md bg-mandarine text-white font-bouton hover:bg-orange-500 transition"
              >
                Connexion
              </Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
}
