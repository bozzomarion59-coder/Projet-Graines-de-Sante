import { Link } from "react-router-dom";

export default function HeroHeader() {
    return (
        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
            <img 
            src="src/assets/hero-graines-de-sante.jpg" 
            alt="Graines de Santé Hero" 
            className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-4xl md:text-5xl font-titre text-white mb-4">
                    Graines de Santé
                </h1>
                <p className="text-xl md:text-2xl font-texte text-white mb-6">
                    Bien-être dans l’Assiette !
                </p>
                <Link to="/catalogue" className="px-6 py-3 bg-mandarine text-grainCafe font-bouton rounded-lg shadow hover:bg-vertSauvage transition" >
                    Explorer les recettes
                </Link>
            </div>
        </div>
    );
}
