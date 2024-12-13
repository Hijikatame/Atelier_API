import database from "../db/database.js";

export const getUserByEmailModel = async (email) => {
    const [rows] = await database.query(
        'SELECT * FROM users WHERE email = ?',
        [email]
    );
    return rows[0];  // Si un utilisateur est trouvé, il est retourné
};