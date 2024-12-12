// Importation des modules nécessaires
import express from 'express'; // Framework pour créer un serveur web.
import dotenv from 'dotenv'; // Module pour gérer les variables d'environnement.

// Importation du routeur défini dans un fichier séparé
import router from './router.js';

// Chargement des variables d'environnement depuis un fichier .env
dotenv.config();

// Initialisation de l'application Express
const app = express();

// Récupération du port défini dans le fichier .env
const port = process.env.APP_PORT;

// Middleware pour parser le corps des requêtes JSON
app.use(express.json());

// Middleware pour définir le préfixe des routes de l'API
// Toutes les routes définies dans le routeur seront accessibles via /api
app.use('/api', router);

// Démarrage du serveur sur le port spécifié
app.listen(port, () => {
    console.log(`Le serveur écoute le port http://localhost:${port}/api.`);
});
