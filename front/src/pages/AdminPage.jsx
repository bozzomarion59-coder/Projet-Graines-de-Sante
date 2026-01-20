export default function AdminPage() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-vertSauvage">
        Espace Administrateur
      </h1>

      <p className="mt-4 text-lg">
        Bonjour {user?.email_user}, vous êtes connecté en tant qu’<strong>admin</strong>.
      </p>
    </div>
  );
}
