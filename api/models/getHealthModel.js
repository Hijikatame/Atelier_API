// Modèle pour vérifier l'état de santé de l'API
export const getHealthModel = async () => {
    try {
        // Simulation d'une réponse de "santé" de l'API
        const health = "Mon API fonctionne";

        // Renvoi de l'état de santé
        return health;
    } catch (erreur) {
        // Gestion des erreurs
        // Si une erreur survient, elle est capturée et une nouvelle erreur est levée avec son message.
        throw Error(erreur.message);
    }
};