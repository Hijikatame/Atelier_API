import { findUserByEmailModel } from "../models/findUserByEmailModel.js";
import { createUserModel } from "../models/createUserModel.js";
import nodemailer from "nodemailer";
import generateToken, { sendVerificationEmail } from "../consts/consts.js";
import { saveToken } from "../models/saveTokenModel.js";

export const getRegisterController = async (req, res) => {
	try {
		const { email } = req.body;
		// Check si user existe dans bdd
		const user = await findUserByEmailModel.userByEmail(email);
		if (user.length > 0) {
			// Si l'utilisateur existe déjà
			res.status(200).json({
				status: 200,
				message: "user déjà inscrit",
			});
		} else {
			const isCreated = createUserModel.createUser(req.body); // Création du nouvel utilisateur
			if (isCreated) {
				// Générer un token
				const token = generateToken({ user_id });

				// Insérer le token dans la base de données
				await insertTokenModel(user_id, token);

				// Envoyer l'email avec le token
				await sendVerificationEmail(pseudo, email, token);

				res.status(200).json({
					status: 200,
					message: "Félicitations ! Votre compte a bien été créé !",
				});
			} else {
				res.status(401).json({
					status: 401,
					message: "une erreur est survenue", // Erreur lors de la création de l'utilisateur
				});
			}
		}
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: error.message, // Erreur serveur non gérée
		});
	}
};
