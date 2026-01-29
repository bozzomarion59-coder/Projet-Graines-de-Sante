# Graines de Santé – Application de Recettes Sans Gluten

## Présentation
**Graines de Santé** est une application web permettant de consulter des recettes **100 % sans gluten**, d’interagir via des commentaires, des notes et des favoris, et d’accéder à un **espace administrateur sécurisé**.

Ce projet a été réalisé dans le cadre de ma formation **Développeur d’Application Web & Mobile**.

---

## Objectifs du projet
- Proposer des recettes 100 % sans gluten  
- Permettre l’ajout de favoris, commentaires et notes  
- Offrir un espace administrateur sécurisé  
- Intégrer un formulaire de contact  
- Mettre en place une architecture **front-end / back-end séparée**

---

## Technologies utilisées

### Front-end
- React  
- React Router  
- TailwindCSS  

### Back-end
- Node.js  
- Express  
- JWT (authentification)  
- Bcrypt (hash des mots de passe)  

### Base de données
- MySQL  

---

## Sécurité
Le projet utilise un fichier `.env` (non versionné) afin de protéger :
- Les identifiants MySQL  
- La clé secrète JWT  
- Les ports du serveur  

Le fichier `.gitignore` contient notamment :

```gitignore
*.env
.env
node_modules/
package-lock.json

---

### Installation du projet

### 1️⃣ Cloner le projet
```bash
git clone https://github.com/bozzomarion59-coder/Projet-Graines-de-Sante.git

### 2️⃣ Installer les dépendances
```front
cd front
npm install

```back
cd back
npm install

### 3️⃣ Configurer le fichier `.env` (exemple)
```env
SERVER_PORT=5001
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=
DB_NAME=gluten_free_recipes
JWT_SECRET=xxxxxxx
JWT_EXPIRES_IN=1h
DB_PORT=3306

## Lancer le projet

### Front-end
```bash
npm run dev

### Back-end
```bash
npm run dev

---

## Fonctionnalités principales
- Consultation des recettes  
- Ajout aux favoris  
- Commentaires et notes  
- Connexion / inscription  
- Gestion administrateur (suppression de recettes)  
- Formulaire de contact  

---

## Améliorations futures
- Blog conseils & rencontres  
- Carte Google Maps des adresses sans gluten  
- Export PDF / impression des recettes  
- Vidéos explicatives  
- Lien direct vers l’AFDIAG  

---

## Développeuse
**Marion Bozzo**  
Formation : *Développeuse Web & Mobile – ForEach Academy*  
Promo **2025–2026**
