import database from '../db/database.js';

export const getUserByIdModel = async (userId) => {
    try {
        const [rows] = await database.query('SELECT * FROM users WHERE id = ?', [userId]);
        return rows[0]; // Renvoyer l'utilisateur trouvé
    } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur:", error);
        throw error; // Lancer l'erreur pour la gestion dans le contrôleur
    }
};
