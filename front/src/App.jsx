import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import PageApropos from "./pages/PageApropos";
import PageCGU from "./pages/PageCGU";
import PageRGPD from "./pages/PageRGPD";
import PageConnexion from "./pages/PageConnexion";
import PageInscription from "./pages/PageInscription";
import PageMdpForget from "./pages/PageMdpForget";
import PageSupport from "./pages/PageSupport";
import PageAccueil from "./pages/PageAccueil";
import CatalogueRecette from "./pages/CatalogueRecette";
import PageDetailRecette from "./pages/PageDetailRecette";
import PageFavorites from "./pages/PageFavorites";


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-grow">
        
        <Routes>
          <Route path="/" element={<PageAccueil />} />
          <Route path="/apropos" element={<PageApropos />} />
          <Route path="/cgu" element={<PageCGU />} />
          <Route path="/rgpd" element={<PageRGPD />} />
          <Route path="/connexion" element={<PageConnexion />} />
          <Route path="/inscription" element={<PageInscription />} />
          <Route path="/mdp-forget" element={<PageMdpForget />} />
          <Route path="/support" element={<PageSupport />} />
          <Route path="/catalogue" element={<CatalogueRecette />} />
          <Route path="/recette/:id" element={<PageDetailRecette />} /> 
          <Route path="/mes-favoris" element={<PageFavorites />} />
        </Routes>
      </main>

      

      <Footer />
    </div>
  );
}

export default App;
