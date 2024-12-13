import database from '../db/database.js';

export const insertVerificationTokenModel = async (userId, token) => {
    try {
        // Insérer le token et l'ID utilisateur dans la base de données
        const result = await database.query(
            `INSERT INTO email_verification_tokens (user_id, token) VALUES (?, ?)`,
            [userId, token]
        );

        return result.insertId; // Retourner l'ID de l'insertion ou un succès si nécessaire
    } catch (error) {
        console.error("Erreur lors de l'insertion du token de vérification :", error);
        throw error; // Lancer l'erreur pour être gérée par le contrôleur
    }
};
