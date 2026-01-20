import { useState } from "react";
import UsersAdmin from "../components/UsersAdmin";
import RecipesAdmin from "../components/RecipesAdmin";
import CommentsAdmin from "../components/CommentsAdmin";
import RatingsAdmin from "../components/RatingsAdmin";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="min-h-screen flex bg-beige font-texte text-grainCafe">

      {/* SIDEBAR */}
      <aside className="w-64 bg-vertSauvage text-white p-6 space-y-6">
        <h2 className="text-2xl font-titre mb-6">Admin</h2>

        <button
          className={`block w-full text-left py-2 px-3 rounded ${
            activeTab === "users" ? "bg-mandarine" : "hover:bg-oliveGrise"
          }`}
          onClick={() => setActiveTab("users")}
        >
          Utilisateurs
        </button>

        <button
          className={`block w-full text-left py-2 px-3 rounded ${
            activeTab === "recipes" ? "bg-mandarine" : "hover:bg-oliveGrise"
          }`}
          onClick={() => setActiveTab("recipes")}
        >
          Recettes
        </button>

        <button
          className={`block w-full text-left py-2 px-3 rounded ${
            activeTab === "comments" ? "bg-mandarine" : "hover:bg-oliveGrise"
          }`}
          onClick={() => setActiveTab("comments")}
        >
          Commentaires
        </button>

        <button
          className={`block w-full text-left py-2 px-3 rounded ${
            activeTab === "ratings" ? "bg-mandarine" : "hover:bg-oliveGrise"
          }`}
          onClick={() => setActiveTab("ratings")}
        >
          Notes
        </button>
      </aside>

      {/* CONTENU */}
      <main className="flex-1 p-10">
        {activeTab === "users" && <UsersAdmin />}
        {activeTab === "recipes" && <RecipesAdmin />}
        {activeTab === "comments" && <CommentsAdmin />}
        {activeTab === "ratings" && <RatingsAdmin />}
      </main>
    </div>
  );
}
