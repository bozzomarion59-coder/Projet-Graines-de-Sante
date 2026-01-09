export default function APropos() {
  return (
    <div className="bg-beige min-h-screen px-6 py-12 font-texte text-grainCafe">
      <div className="max-w-4xl mx-auto">

        <h1 className="font-titre text-4xl text-grainCafe mb-6">
          À propos de Graines de Santé
        </h1>

        <p className="mb-6 leading-relaxed">
          Graines de Santé est née d’une idée simple étant moi-même coeliaque : rendre l’alimentation
          saine, naturelle et gourmande accessible à tous. Je crois que
          chaque repas peut être une source de bien-être, d’énergie et de
          plaisir, sans compromis sur la qualité.
        </p>

        <h2 className="font-titre text-2xl text-grainCafe mt-10 mb-4">
          Ma mission
        </h2>
        <p className="mb-6 leading-relaxed">
          J'accompagne les personnes souhaitant adopter une alimentation
          plus équilibrée, plus végétale ou adaptée à leurs besoins
          (intolérances, allergies, objectifs santé). Ma plateforme propose
          des recettes, des conseils et un catalogue d’ingrédients sélectionnés
          avec soin.
        </p>

        <h2 className="font-titre text-2xl text-grainCafe mt-10 mb-4">
          Une approche simple et authentique
        </h2>
        <p className="mb-6 leading-relaxed">
          Pas de discours culpabilisant, pas de solutions miracles. Juste des
          ingrédients bruts, des recettes accessibles et des informations
          fiables pour vous aider à faire les meilleurs choix pour votre santé.
        </p>

        <h2 className="font-titre text-2xl text-grainCafe mt-10 mb-4">
          Mes valeurs
        </h2>

        <ul className="list-disc ml-6 space-y-3">
          <li><strong>Transparence :</strong> des informations claires, sourcées et compréhensibles.</li>
          <li><strong>Bienveillance :</strong> chacun avance à son rythme, sans pression.</li>
          <li><strong>Qualité :</strong> des produits sélectionnés pour leurs bienfaits et leur naturalité.</li>
          <li><strong>Accessibilité :</strong> des recettes simples, économiques et adaptées au quotidien.</li>
        </ul>

        <p className="mt-10 leading-relaxed">
          Graines de Santé, c’est avant tout une communauté qui partage la même
          envie : prendre soin de soi, naturellement, un repas à la fois.
        </p>
      </div>
    </div>
  );
}
