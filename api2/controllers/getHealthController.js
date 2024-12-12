export const getHealthController = (req, res) => {
	try {
		res.status(200).json({
			status: 200,
			message: "Bienvenue dans mon API",
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "Probleme avec le serveur !",
		});
	}
};
