export default function UserPage() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-grainCafe">
        Espace Utilisateur
      </h1>

      <p className="mt-4 text-lg">
        Bonjour {user?.email_user}, bienvenue dans votre espace personnel.
      </p>
    </div>
  );
}
