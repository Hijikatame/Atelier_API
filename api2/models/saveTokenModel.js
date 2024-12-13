export const saveToken = async ({ user_id, token, expires_at }) => {
	await database.query(
		"INSERT INTO email_verification_tokens (user_id, token, expires_at) VALUES (?, ?, ?)",
		[user_id, token, expires_at],
	);
};
