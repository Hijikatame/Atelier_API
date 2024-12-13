import { getAllUsersModel } from "../models/getAllUsersModel.js";
export const getAllUsersController = async (req, res) => {
	try {
		// Récupère tous les utilisateurs depuis le modèle
		const users = await getAllUsersModel();
		res.status(200).json({
			status: 200, // Succès de la requête
			message: "La liste des users",
			users, // Retourne la liste des utilisateurs
		});
	} catch (error) {
		// Gestion des erreurs inattendues
		res.status(500).json({
			status: 500, // Erreur serveur interne
			message: "Une erreur est survenue. Veuillez réessayer plus tard.",
		});
	}
};
