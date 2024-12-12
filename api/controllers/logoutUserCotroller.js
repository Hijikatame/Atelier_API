import { deleteSession } from "../models/loginUserModel.js";

export const logoutUserController = async (req, res) => {
    try {
        const token = req.token; // Le middleware "protect" place le token dans req
        await deleteSession(token);
        res.status(200).json({
            status: 200,
            message: 'Déconnexion réussie.'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            status: 500,
            error: 'Une erreur est survenue. Veuillez réessayer.' 
        });
    }
};