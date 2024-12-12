import database from "../db/database.js";

export const saveSession = async ({ user_id, token, expires_at }) => {
    await database.query(
        `INSERT INTO sessions (user_id, token, expires_at, created_at) 
         VALUES (?, ?, ?, NOW())`,
        [user_id, token, expires_at]
    );
};

export const findSessionByToken = async (token) => {
    const result = await database.query(
        `SELECT * FROM sessions WHERE token = ? AND expires_at > NOW()`,
        [token]
    );
    return result[0][0] || null;
};

export const deleteSession = async (token) => {
    await database.query(
        `DELETE FROM sessions WHERE token = ?`, 
        [token]
    );
};