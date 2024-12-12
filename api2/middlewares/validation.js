import { validateEmail, validatePassword } from "../consts/consts";

export const validation = (req, res, next) => {
	const { pseudo, email, password } = req.body;
	try {
		// verification  si le pseudo | email | password fifferents de null
		if (!pseudo || !email || !password) {
			res.status(400).json({
				status: 400,
				message: "Toutes les champs sont obligatoires !",
			});
		}

		// verifier l'adresse mail et mdp
		if (!validateEmail(email) || !validatePassword(password)) {
			return res.status(400).json({
				status: 400,
				error: "Email ou mot de passe incorrect.",
			});
		}

		next();
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: error.message,
		});
	}
};
