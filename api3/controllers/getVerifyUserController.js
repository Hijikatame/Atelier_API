import jwt from 'jsonwebtoken';
import { findTokenModel } from '../models/findTokenModel.js';
import { getUserByIdModel } from '../models/getUserByIdModel.js';
import { updateUserVerificationStatus } from '../models/updateUserVerificationStatus.js';

export const getVerifyUserController = async (req, res) => {
    const { token } = req.query; // Récupérer le token de la requête GET
    console.log(token);

    if (!token) {
        return res.status(400).json({
            status: 400,
            message: "Aucun token fourni",
        });
    }

    try {
        // Décoder le token pour récupérer l'ID de l'utilisateur
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Vérifier le token

        const userId = decoded.userId;

        // Vérifier si ce token de vérification existe
        const verificationToken = await findTokenModel(token);

        if (!verificationToken) {
            return res.status(404).json({
                status: 404,
                message: "Utilisateur non trouvé ou token invalide",
            });
        }

        // Trouve le user dans la database
        const user = await getUserByIdModel(userId);

        // Si l'utilisateur est déjà vérifié, retourner un message
        if (user.is_verified) {
            return res.status(200).json({
                status: 200,
                message: "Votre compte a déjà été vérifié.",
            });
        }

        // Mettre à jour l'utilisateur pour le marquer comme vérifié
        const updated = await updateUserVerificationStatus(userId);

        if (!updated) {
            return res.status(500).json({
                status: 500,
                message: "Erreur lors de la mise à jour de l'utilisateur.",
            });
        }
        // Rediriger l'utilisateur vers la page de connexion après une vérification réussie
        res.redirect("http://localhost:5173/connexion");  // Rediriger vers la page de connexion (front-end)

    } catch (error) {
        // Gestion des erreurs liées au token
        console.error("Erreur lors de la vérification du token:", error);
        res.status(400).json({
            status: 400,
            message: "Le token est invalide ou a expiré.",
        });
    }
};
