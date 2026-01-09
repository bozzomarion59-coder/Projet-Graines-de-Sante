export default function PageRGPD() {
  return (
    <div className="bg-beige min-h-screen px-6 py-12 font-texte text-grainCafe">
      <div className="max-w-4xl mx-auto">

        <h1 className="font-titre text-4xl text-grainCafe mb-6">
          Politique de protection des données (RGPD)
        </h1>

        <p className="mb-6 leading-relaxed">
          La présente Politique de protection des données a pour objectif
          d’expliquer de manière claire et transparente comment Graines de Santé
          collecte, utilise et protège vos données personnelles, conformément au
          Règlement Général sur la Protection des Données (RGPD) et à la
          législation française en vigueur.
        </p>

        <h2 className="font-titre text-2xl mt-10 mb-4">
          1. Responsable du traitement
        </h2>
        <p className="mb-6 leading-relaxed">
          Le responsable du traitement des données collectées sur le site
          Graines de Santé est la développeuse du projet. Pour toute
          question relative à vos données, vous pouvez me contacter via la
          page « Contact ».
        </p>

        <h2 className="font-titre text-2xl mt-10 mb-4">
          2. Données collectées
        </h2>
        <p className="mb-4 leading-relaxed">
          Je collecte uniquement les données nécessaires au bon
          fonctionnement du site et à l’amélioration de votre expérience :
        </p>

        <ul className="list-disc ml-6 space-y-3">
          <li>Données de compte : nom, prénom, email, mot de passe chiffré.</li>
          <li>Données d’utilisation : recettes enregistrées, préférences.</li>
          <li>Données techniques : adresse IP, type de navigateur, pages visitées.</li>
        </ul>

        <p className="mt-4 leading-relaxed">
          Aucune donnée sensible n’est collectée.
        </p>

        <h2 className="font-titre text-2xl mt-10 mb-4">
          3. Finalités du traitement
        </h2>
        <p className="mb-6 leading-relaxed">
          Vos données sont utilisées uniquement pour :
        </p>

        <ul className="list-disc ml-6 space-y-3">
          <li>Créer et gérer votre compte utilisateur.</li>
          <li>Vous permettre d’accéder à vos recettes et préférences.</li>
          <li>Améliorer la qualité du site et de ses fonctionnalités.</li>
          <li>Assurer la sécurité et la performance du service.</li>
        </ul>

        <h2 className="font-titre text-2xl mt-10 mb-4">
          4. Base légale
        </h2>
        <p className="mb-6 leading-relaxed">
          Le traitement de vos données repose sur :
        </p>

        <ul className="list-disc ml-6 space-y-3">
          <li>Votre consentement lors de la création d’un compte.</li>
          <li>L’intérêt légitime d’assurer le bon fonctionnement du site.</li>
        </ul>

        <h2 className="font-titre text-2xl mt-10 mb-4">
          5. Conservation des données
        </h2>
        <p className="mb-6 leading-relaxed">
          Vos données sont conservées tant que votre compte est actif. Vous
          pouvez demander leur suppression à tout moment via la page « Contact ».
        </p>

        <h2 className="font-titre text-2xl mt-10 mb-4">
          6. Partage des données
        </h2>
        <p className="mb-6 leading-relaxed">
          Vos données ne sont ni vendues, ni louées, ni transmises à des tiers.
          Elles sont utilisées exclusivement dans le cadre du fonctionnement du
          site Graines de Santé.
        </p>

        <h2 className="font-titre text-2xl mt-10 mb-4">
          7. Vos droits
        </h2>
        <p className="mb-4 leading-relaxed">
          Conformément au RGPD, vous disposez des droits suivants :
        </p>

        <ul className="list-disc ml-6 space-y-3">
          <li>Droit d’accès à vos données.</li>
          <li>Droit de rectification.</li>
          <li>Droit à l’effacement (« droit à l’oubli »).</li>
          <li>Droit d’opposition.</li>
          <li>Droit à la portabilité.</li>
        </ul>

        <p className="mt-4 leading-relaxed">
          Pour exercer vos droits, contactez-moi via la page « Contact ».
        </p>

        <h2 className="font-titre text-2xl mt-10 mb-4">
          8. Sécurité des données
        </h2>
        <p className="mb-6 leading-relaxed">
          Je mets en place des mesures techniques et organisationnelles
          pour protéger vos données contre tout accès non autorisé, perte ou
          altération. Les mots de passe sont chiffrés et jamais stockés en clair.
        </p>

        <h2 className="font-titre text-2xl mt-10 mb-4">
          9. Modification de la politique
        </h2>
        <p className="mb-6 leading-relaxed">
          Cette politique peut être mise à jour pour refléter des évolutions
          légales ou techniques. En cas de modification importante, vous en serez
          informé sur le site.
        </p>

        <p className="mt-10 leading-relaxed">
          En utilisant Graines de Santé, vous acceptez cette politique de
          protection des données.
        </p>
      </div>
    </div>
  );
}
