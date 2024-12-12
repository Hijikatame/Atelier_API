// Importation du modèle
// Ce modèle contient probablement la logique pour récupérer les données associées à la "santé" du système.
import { getHealthModel } from "../models/getHealthModel.js";

// Contrôleur pour gérer la requête GET sur l'état de santé du système
export const getHealthController = async (req, res) => {
    try {
        // Appel de la fonction getHealthModel pour récupérer les informations de santé
        const health = await getHealthModel();

        // Réponse réussie avec le statut 200 et les données récupérées
        res.status(200).json({
            status: 200, // Code de statut HTTP (succès)
            message: "Bienvenue dans mon API", // Message informatif
            health, // Données renvoyées par le modèle
        });
    } catch (error) {
        // Gestion des erreurs en cas d'échec de l'opération
        // Une erreur 500 est renvoyée pour signaler un problème côté serveur.
        res.status(500).json({
            status: 500, // Code de statut HTTP (erreur serveur)
            message: "Probleme ! 😱", // Message d'erreur
        });
    }
};
