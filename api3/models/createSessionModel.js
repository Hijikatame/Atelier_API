import database from '../db/database.js';  // Assurez-vous d'avoir votre connexion à la base de données

export const createSessionModel = async (userId, sessionToken) => {
    try {
        const result = await database.query(
            'INSERT INTO sessions (user_id, token) VALUES (?, ?)',
            [userId, sessionToken]
        );
        return result;
    } catch (error) {
        console.error("Erreur lors de la création de la session :", error);
        throw error;
    }
};
