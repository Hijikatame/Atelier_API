import database from "../db/database.js";

export const getAllUsersModel = async () => {
    const [rows] = await database.query(
        'SELECT * FROM users'
    );
    return rows;
};