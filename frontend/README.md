# Digital Playground — React Edition

A modern React + Vite rebuild of Karim Elkobrossy’s digital playground. The site highlights machine learning research, data science case studies, and interactive development projects with an elevated visual experience.

## Tech Stack
- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [react-icons](https://react-icons.github.io/react-icons/)
- Modern CSS with glassmorphism styling and responsive layouts

## Getting Started
```bash
npm install
npm run dev
```
The development server will print a local URL (default: `http://localhost:5173`).

## Available Scripts
- `npm run dev` — start the Vite development server with hot reload
- `npm run build` — create a production build in `dist/`
- `npm run preview` — locally preview the built site
- `npm run lint` — run ESLint using the provided configuration

## Project Structure
```
frontend/
├── public/           # Static assets (profile + project imagery)
├── src/
│   ├── components/   # Reusable UI building blocks
│   ├── data/         # Structured content for the hero and project listings
│   ├── App.jsx       # Root component orchestrating the layout
│   ├── App.css       # Component-level styles
│   ├── index.css     # Global design tokens and resets
│   └── main.jsx      # React entry point
└── package.json
```

## Content Overview
All information comes directly from the original portfolio:
- Hero introduces Karim as a machine learning engineer and author.
- Machine Learning & Data Science projects cover journal bearing analysis, Tanzanian water pump forecasting, and feature selection research.
- Programming & Web Development projects showcase the AI-powered UNO game and a full police workforce web platform.

Update `src/data/content.js` to add, edit, or remove projects while keeping the polished UI intact.
