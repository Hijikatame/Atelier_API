import { deleteUserAccount } from "../models/deleteUserAccountModel.js";

// Contrôleur pour la suppression de compte
export const deleteUserAccountController = async (req, res) => {
    const user_id = req.user_id; // ID de l'utilisateur connecté, extrait du middleware "protect"

    try {
        await deleteUserAccount(user_id);

        res.status(200).json({
            status: 200,
            message: 'Compte supprimé avec succès.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            error: 'Une erreur est survenue lors de la suppression du compte.',
        });
    }
};
