import database from '../db/database.js';

export const findTokenModel = async (token) => {
    try {
        const [rows] = await database.query(
            `SELECT * FROM email_verification_tokens WHERE token = ?`,
            [token]
        );
        return rows.length > 0 ? rows[0] : null; // Retourne le premier résultat ou null si aucun résultat
    } catch (error) {
        console.error("Erreur lors de la recherche du token:", error);
        throw error; // Lancer l'erreur pour que le contrôleur puisse la gérer
    }
};
