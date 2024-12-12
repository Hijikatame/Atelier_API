import database from "../db/database.js";

export const deleteUserAccount = async (user_id) => {
    const connection = await database.getConnection();
    try {
        await connection.beginTransaction();

        // Supprimer les tokens associés
        await connection.query(
            `DELETE FROM email_verification_tokens WHERE user_id = ?`,
            [user_id]
        );

        // Supprimer les sessions associées
        await connection.query(`DELETE FROM sessions WHERE user_id = ?`, [user_id]);

        // Supprimer l'utilisateur
        await connection.query(`DELETE FROM users WHERE id = ?`, [user_id]);

        await connection.commit();
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.release();
    }
};
