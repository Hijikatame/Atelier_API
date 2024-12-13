export const createUser = async ({ pseudo, email, password_hash, gender }) => {
	try {
		// Exécute une requête SQL pour insérer un nouvel utilisateur
		const user = await database.query(
			"insert into users (pseudo, email, password_hash, gender) values (?,?,?,?)",
			[pseudo, email, password_hash, gender],
		);

		// Vérifie si l'insertion a affecté des lignes et retourne l'utilisateur inséré
		if (user.affectedRows) {
			return user;
		}

		// Retourne false si l'insertion a échoué
		return false;
	} catch (error) {
		// Relance une erreur si la requête échoue
		throw new Error(error.message);
	}
};
