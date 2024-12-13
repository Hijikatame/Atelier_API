import database from "../db/database.js";

export const getAllUsersModel = async () => {
	try {
		// Exécute une requête SQL pour récupérer tous les utilisateurs
		const users = await database.query("select * from users");

		// Retourne les utilisateurs récupérés
		return users;
	} catch (error) {
		// Relance une erreur avec un message explicite si la requête échoue
		throw Error(error.message);
	}
};
