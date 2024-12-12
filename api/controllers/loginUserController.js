import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { findUserByEmail } from '../models/getRegisterModel.js';
import { saveSession } from '../models/loginUserModel.js';

// Fonction de connexion

export const loginUserController = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            status: 400,
            error: 'Tous les champs sont obligatoires.'
        });
    }

    try {
        // Vérifier si l'utilisateur existe
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(401).json({
                status: 401,
                error: 'Email ou mot de passe incorrect.'
            });
        }

        // Vérifier le mot de passe
        const isPasswordValid = await bcrypt.compare(password, user.password_hash);
        if (!isPasswordValid) {
            return res.status(401).json({
                status: 401,
                error: 'Email ou mot de passe incorrect.'
            });
        }

        // Générer un token UUID pour la session
        const token = uuidv4();

        // Sauvegarder la session dans la base de données
        const expirationDate = new Date(Date.now() + 3600 * 10000); // 10 heures
        await saveSession({ user_id: user.id, token, expires_at: expirationDate });

        // Retourner le token à l'utilisateur
        res.status(200).json({
            status: 200,
            message: 'Connexion réussie.',
            token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            error: 'Une erreur est survenue. Veuillez réessayer.'
        });
    }
};