import { updateUserProfile } from "../models/updateUserProfileModel.js";

// Contrôleur pour la mise à jour du profil
export const updateUserProfileController = async (req, res) => {
    const { pseudo, password_hash, profile_photo, birth_date, gender } = req.body;
    const user_id = req.user_id; // ID utilisateur extrait du middleware "protect"

    // Vérifier si au moins un champ est fourni
    if (!pseudo && !password_hash && !profile_photo && !birth_date && !gender) {
        return res.status(400).json({
            status: 400,
            error: 'Aucune information à mettre à jour.',
        });
    }

    try {
        // Mettre à jour les champs transmis
        await updateUserProfile(user_id, { pseudo, password_hash, profile_photo, birth_date, gender });

        res.status(200).json({
            status: 200,
            message: 'Profil mis à jour avec succès.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            error: 'Une erreur est survenue lors de la mise à jour du profil.',
        });
    }
};