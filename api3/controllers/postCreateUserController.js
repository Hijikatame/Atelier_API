import { createUserModel } from "../models/createUserModel.js";
import { checkEmailExistence } from "../const/checkEmailExistance.js";
import { sendVerificationEmail } from "../const/sendVerificationEmail.js";
import { generateToken } from "../const/generateToken.js";
import { insertVerificationTokenModel } from "../models/insertVerificationTokenModel.js";

export const postCreateUserController = async (req, res) => {
    const { pseudo, email, password } = req.body;
    console.log(req.body);

    try {
        // Vérification si l'email existe déjà
        const existingUser = await checkEmailExistence(email);
        if (existingUser) {
            return res.status(400).json({
                status: 400,
                message: "Cet email est déjà utilisé."
            });
        }

        // Création de l'utilisateur
        const newUser = await createUserModel(pseudo, email, password);  // Le mot de passe est déjà haché dans req.body

        // Générer un token de vérification
        const verificationToken = generateToken(newUser.id);

        // Insérer le token dans la base de données
        await insertVerificationTokenModel(newUser.id, verificationToken);

        // Envoyer l'email avec le token de vérification
        await sendVerificationEmail(pseudo, email, verificationToken);

        // Répondre avec succès
        res.status(201).json({
            status: 201,
            message: "Utilisateur créé avec succès.",
            user: {
                pseudo: newUser.pseudo,
                email: newUser.email
            }
        });
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur :", error);
        res.status(500).json({
            status: 500,
            message: "Erreur interne du serveur. Veuillez réessayer plus tard."
        });
    }
};
