import database from "../db/database.js";

export const createUserModel = async (pseudo, email, passwordHash) => {
    const [result] = await database.query(
        'INSERT INTO users (pseudo, email, password_hash, is_verified) VALUES (?, ?, ?, ?)',
        [pseudo, email, passwordHash, false] // L'utilisateur n'est pas encore vérifié
    );
    return { id: result.insertId, pseudo, email }; // Retourner l'utilisateur créé avec son ID
};