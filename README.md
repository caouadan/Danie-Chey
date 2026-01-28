# Portfolio - Danie Chey

Portfolio personnel en React + Vite + SASS avec support GitHub Pages.

## 🚀 Installation

```bash
# Cloner le projet
git clone https://github.com/votre-username/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 📁 Structure du projet

```
portfolio/
├── public/
│   └── placeholder.jpg
├── src/
│   ├── components/       # Composants React
│   ├── pages/           # Pages (Home, ProjectDetail, NotFound)
│   ├── styles/          # Styles globaux SCSS
│   ├── data/            # Données JSON
│   ├── App.jsx
│   ├── main.jsx
│   └── router.jsx
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Personnalisation

### Données du portfolio

Modifiez le fichier `src/data/projects.json` pour personnaliser :
- Les projets
- Les compétences
- Le parcours académique

### Thème

Les couleurs et styles sont définis dans :
- `src/styles/_variables.scss` - Variables (couleurs, typos, espacements)
- `src/styles/global.scss` - Styles globaux et thèmes light/dark

## 📦 Déploiement sur GitHub Pages

1. Modifiez `vite.config.js` avec le nom de votre repo :
```js
base: '/nom-de-votre-repo/'
```

2. Déployez :
```bash
npm run deploy
```

3. Activez GitHub Pages dans les paramètres de votre repo (source: branche `gh-pages`).

## 🛠 Technologies

- React 18
- React Router DOM 6
- Vite 6
- SASS
- gh-pages (déploiement)

## 📄 Licence

MIT
