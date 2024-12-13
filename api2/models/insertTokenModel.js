import database from "../db/database.js";

export const insertToken = async (user_id, token) => {
	try {
		const tokenInsert = await database.query(
			"INSERT INTO email_verification_tokens (user_id, token) VALUES (?, ?)",
			[user_id, token],
		);
		return tokenInsert;
	} catch (error) {
		console.error("Error inserting token:", error);
		throw error;
	}
};
