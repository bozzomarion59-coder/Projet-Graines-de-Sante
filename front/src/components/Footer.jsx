import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full bg-beige border-t border-vertSauvage mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4 gap-4">

        <p className="text-grainCafe font-texte">
          © 2026 Graines de Santé — Tous droits réservés
        </p>
        
        <ul className="flex flex-wrap items-center gap-6 text-grainCafe font-bouton">
          <li>
            <Link
              to="/apropos"
              className="hover:text-mandarine transition-colors"
            >
              À propos
            </Link>
          </li>

          <li>
            <Link
              to="/cgu"
              className="hover:text-mandarine transition-colors"
            >
              CGU
            </Link>
          </li>

          <li>
            <Link
              to="/rgpd"
              className="hover:text-mandarine transition-colors"
            >
              RGPD
            </Link>
          </li>

          <li> 
            <Link 
            to="/support" 
            className="hover:text-mandarine transition-colors" 
            > Contact 
            </Link> 
          </li>
        </ul>
      </div>
    </footer>
  );
}
