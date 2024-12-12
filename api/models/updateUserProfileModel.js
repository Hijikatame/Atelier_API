import database from "../db/database.js";

export const updateUserProfile = async (user_id, fieldsToUpdate) => {
    const allowedFields = ['pseudo', 'password_hash', 'profile_photo', 'birth_date', 'gender'];
    const setClauses = [];
    const values = [];

    // Construire dynamiquement les parties SET et VALUES de la requête
    for (const [key, value] of Object.entries(fieldsToUpdate)) {
        if (allowedFields.includes(key) && value !== undefined) {
            setClauses.push(`${key} = ?`);
            values.push(value);
        }
    }

    if (setClauses.length === 0) {
        throw new Error('Aucun champ valide à mettre à jour.');
    }

    // Ajouter la mise à jour de `updated_at`
    setClauses.push('updated_at = NOW()');

    // Construire la requête finale
    const query = `UPDATE users SET ${setClauses.join(', ')} WHERE id = ?`;
    values.push(user_id);

    await database.query(query, values);
};
