export const getHealthController = (req, res) => {
	try {
		// Retourne une réponse de validation de l'état de l'API
		res.status(200).json({
			status: 200,
			message: "Bienvenue dans mon API",
		});
	} catch (error) {
		// Capture les erreurs inattendues et retourne une réponse serveur
		res.status(500).json({
			status: 500,
			message: "Probleme avec le serveur !",
		});
	}
};
