import database from '../db/database.js';

export const updateUserVerificationStatus = async (userId) => {
    try {
        const [result] = await database.query(
            'UPDATE users SET is_verified = true WHERE id = ?',
            [userId]
        );
        return result.affectedRows > 0; // Retourner vrai si la mise à jour a été effectuée
    } catch (error) {
        console.error("Erreur lors de la mise à jour du statut de vérification:", error);
        throw error; // Lancer l'erreur pour la gestion dans le contrôleur
    }
};
