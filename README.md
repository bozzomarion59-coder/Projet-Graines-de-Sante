# Graines de Sante

Application web de recettes 100 % sans gluten avec système de favoris, commentaires, notes et espace administrateur.

Projet realisé dans le cadre de la formation **Développeur Web et Web Mobile (DWWM)** - ForEach Academy 2025-2026.

## Stack technique

| Couche | Technologies |
|--------|-------------|
| **Frontend** | React 10, React Router 7, Tailwind CSS 3, Vite |
| **Backend** | Node.js, Express 5, JWT, Bcrypt |
| **Base de données** | MySQL |
| **Tests** | Vitest, Supertest |

## Fonctionnalités

### Utilisateur
- Consultation du catalogue de recettes avec filtrage par catégorie
- Page détail avec ingrédients, temps de préparation et cuisson
- Inscription / connexion avec authentification JWT
- Ajout de recettes aux favoris
- Commentaires et notation des recettes
- Formulaire de contact / support
- Gestion du profil utilisateur

### Administrateur
- Tableau de bord avec gestion complète :
  - Utilisateurs (consultation, modification, suppression)
  - Recettes (consultation, ajout, suppression)
  - Commentaires (modération)
  - Notes (modération)
  - Messages de support
- Ajout de nouvelles recettes via formulaire dédié

## Architecture

```
projet final/
├── Back/                       # API REST Node.js / Express
│   ├── config/                 # Configuration BDD (MySQL2)
│   ├── controllers/            # Logique metier (8 controllers)
│   ├── models/                 # Accès données (8 models)
│   ├── routes/                 # Endpoints API (8 fichiers de routes)
│   ├── middlewares/            # Middleware JWT (checkToken)
│   ├── tests/                  # Tests Vitest + Supertest
│   ├── gluten_free_recipes.sql # Schéma de la base de données
│   ├── app.js                  # Configuration Express
│   └── index.js                # Point d'entrée serveur
│
└── front/                      # SPA React
    └── src/
        ├── components/         # 20 composants réutilisables
        ├── pages/              # 14 pages
        ├── services/           # 5 services API (Axios)
        ├── assets/             # Images et ressources
        └── App.jsx             # Routeur principal
```

## Schema de la base de données

| Table | Description |
|-------|-------------|
| `users` | Utilisateurs (email, pseudo, mot de passe hash, role) |
| `recipes` | Recettes (titre, description, instructions, image, temps) |
| `categories_recipes` | Categories de recettes |
| `ingredients` | Liste des ingrédients |
| `recipe_ingredients` | Liaison recettes-ingredients (quantité) |
| `comments` | Commentaires des utilisateurs sur les recettes |
| `ratings` | Notes des utilisateurs sur les recettes |
| `favorites` | Recettes favorites par utilisateur |
| `support_messages` | Messages du formulaire de contact |

## API REST

| Ressource | Endpoints |
|-----------|-----------|
| **Users** | `GET` `/api/users/AllUser` - `POST` `/api/users/register` - `POST` `/api/users/login` - `PUT` `/api/users/updateUser/:id` - `DELETE` `/api/users/deleteUser/:id` |
| **Recipes** | `GET` `/api/recipes/AllRecipes` - `GET` `/api/recipes/Recipe/:id` - `POST` `/api/recipes/createRecipe` - `PUT` `/api/recipes/updateRecipe/:id` - `DELETE` `/api/recipes/deleteRecipe/:id` |
| **Comments** | `GET` `/api/comments/AllComments` - `GET` `/api/comments/CommentsByRecipe/:id` - `POST` `/api/comments/CreateComment` - `DELETE` `/api/comments/DeleteComment/:id` |
| **Ratings** | `GET` `/api/ratings/AllRatings` - `GET` `/api/ratings/recipe/:recipe_id` - `GET` `/api/ratings/recipe/:recipe_id/average` - `POST` `/api/ratings/` - `DELETE` `/api/ratings/:id` |
| **Favorites** | `POST` `/api/favorites/add` - `DELETE` `/api/favorites/delete` - `GET` `/api/favorites/my-favorites` |
| **Categories** | `GET` `/api/categories/AllCategories` - `GET` `/api/categories/Category/:id` |
| **Ingredients** | `GET` `/api/ingredients/recipe/:id` - `GET` `/api/ingredients/Ingredients` - `DELETE` `/api/ingredients/Ingredients/:id` |
| **Support** | `POST` `/api/support/send` - `GET` `/api/support/AllMessages` |

## Installation

### Prérequis

- Node.js (v18+)
- MySQL

### 1. Cloner le projet

```bash
git clone https://github.com/bozzomarion59-coder/Projet-Graines-de-Sante.git
cd Projet-Graines-de-Sante
```

### 2. Installer les dépendances

```bash
cd Back && npm install
cd ../front && npm install
```

### 3. Configurer la base de données

Importer le schema SQL dans MySQL :

```bash
mysql -u root -p < Back/gluten_free_recipes.sql
```

### 4. Configurer les variables d'environnement

Creer un fichier `Back/.env` :

```env
SERVER_PORT=5001
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=votre_mot_de_passe
DB_NAME=gluten_free_recipes
DB_PORT=3306
JWT_SECRET=votre_cle_secrete
JWT_EXPIRES_IN=1h
```

### 5. Lancer l'application

Dans deux terminaux :

```bash
# Terminal 1 - Backend (port 5001)
cd Back
npm run dev

# Terminal 2 - Frontend (port 5173)
cd front
npm run dev
```

L'application est accessible sur `http://localhost:5173`.

## Sécurité

- Mots de passe hashés avec **Bcrypt**
- Authentification par **JSON Web Token** (JWT)
- Routes protégées par middleware de vérification de token
- Contrôle d'accès basé sur les rôles (utilisateur / administrateur)
- Variables sensibles dans `.env`

## Ameliorations prévues

- Blog conseils et rencontres autour du sans gluten
- Carte interactive des adresses sans gluten
- Export PDF / impression des recettes
- Videos explicatives
- Lien vers l'AFDIAG

## Auteure

**Marion Bozzo**
Formation Developpeur Web et Web Mobile - ForEach Academy (2025-2026)
