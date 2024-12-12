// Importation des modules nécessaires
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
// Chargement des variables d'environnement
dotenv.config();

// Création d'un pool de connexions à la base de données
// Les informations de connexion (hôte, port, utilisateur, etc.) sont récupérées depuis le fichier .env.
const database = mysql.createPool({
    host: process.env.DB_HOST, // Adresse du serveur de base de données.
    port: process.env.DB_PORT, // Port utilisé par le serveur MySQL.
    user: process.env.DB_USER, // Nom d'utilisateur pour accéder à la base.
    password: process.env.DB_PASSWORD, // Mot de passe associé à l'utilisateur.
    database: process.env.DB_NAME, // Nom de la base de données à utiliser.
});

// Vérification de la connexion au pool
database
    .getConnection() // Tentative de récupérer une connexion depuis le pool.
    .then(() => {
        // Si la connexion réussit, afficher un message dans la console.
        console.log('La database a été atteinte');
    })
    .catch((erreur) => {
        // Si une erreur survient, afficher l'erreur dans la console.
        console.log(erreur);
    });

// Exportation du pool de connexions pour utilisation dans d'autres parties de l'application.
export default database;

