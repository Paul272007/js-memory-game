# [Jeu de Memory](https://paul272007.github.io/js-memory-game/)

Jeu de Memory interactif conçu en JavaScript vanilla dans le cadre de la ressource R3.01 (Développement Web).

## 🛠️ Technologies

- **Vanilla JS (ES6+)** : architecture modulaire (`import` / `export`), manipulation native du DOM et absence totale de dépendances ou frameworks externes.
- **CSS Grid & Flexbox** : mise en page en grille adaptative (`repeat(8, 1fr)`) pour le plateau de cartes et Flexbox pour la barre d'état.

## ✨ Fonctionnalités

- **Accessibilité (A11y & ARIA)** : cartes accessibles au clavier et aux lecteurs d'écran via `role="button"` et `tabindex="0"`.
- **Mélange Fisher-Yates** : algorithme de mélange équitable pour distribuer les paires de façon purement aléatoire à chaque partie.
- **Gestion Asynchrone & Rendu Dynamique** :
  - Injection dynamique des images dans le DOM au moment du clic.
  - Temporisation via `setTimeout` (800 ms) pour masquer le contenu des cartes lors d'un mismatch avant de redonner la main au joueur.
- **Cycle de partie & Chronomètre** :
  - Suivi des coups et des paires trouvées.
  - Chronomètre en temps réel avec formatage `mm:ss` (`padStart`).
  - Détection synchrone de victoire et réinitialisation du plateau.

## 🚀 Lancement local

1. **Cloner le dépôt** :
   ```bash
   git clone git@github.com:Paul272007/js-memory-game.git
   cd js-memory-game
   ```

2. **Démarrer un serveur HTTP local** (requis pour le chargement des modules ES6) :
   ```bash
   # Avec Python
   python3 -m http.server 5500

   # Ou avec Node.js
   npx serve .
   ```

3. **Accéder au jeu** :
   Ouvrez [http://localhost:5500](http://localhost:5500) dans votre navigateur.