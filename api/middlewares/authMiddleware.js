import { findSessionByToken } from "../models/loginUserModel.js";

export const protect = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Récupérer le token du header "Authorization"
    if (!token) {
        return res.status(401).json({
            status: 401,
            error: 'Non autorisé. Token manquant.'
        });
    }

    try {
        // Vérifier la session en base
        const session = await findSessionByToken(token);

        if (!session || session.expires_at < new Date()) {
            return res.status(401).json({
                status: 401,
                error: 'Session expirée ou invalide.'
            });
        }

        // Ajouter les infos utilisateur à la requête
        req.user_id = session.user_id;
        req.token = token;

        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ 
            status: 401,
            error: 'Token invalide.'
        });
    }
};