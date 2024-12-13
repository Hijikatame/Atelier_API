export const userByEmail = async (email) => {
	try {
		// Exécute une requête SQL pour rechercher un utilisateur par email
		const [user] = await database.query("select * from users where email = ?", [
			email,
		]);

		// Vérifie si un utilisateur a été trouvé et le retourne
		if (user.length > 0) {
			return user;
		}

		// Retourne false si aucun utilisateur n'est trouvé
		return false;
	} catch (error) {
		// Relance une erreur si la requête échoue
		throw new Error(error.message);
	}
};
