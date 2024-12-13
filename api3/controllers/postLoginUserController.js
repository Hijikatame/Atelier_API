import argon2 from 'argon2';
import { generateToken } from "../const/generateToken.js";
import { createSessionModel } from "../models/createSessionModel.js";
import { getUserByEmailModel } from "../models/getUserByEmailModel.js";

export const postLoginUserController = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            status: 400,
            error: 'Tous les champs sot obligatoires.'
        });
    }

    try {
        // Vérifier si l'utilisateur existe
        const user = await getUserByEmailModel(email);
        if (!user) {
            return res.status(401).json({
                status: 401,
                error: 'Email ou mot de passe incorrect.'
            })
        }

        // Vérifier le mot de passe
        const isPasswordValid = await argon2.verify(user.password_hash, password);
        if (!isPasswordValid) {
            return res.status(401).json({
                status: 401,
                error: 'Email ou mot de passe incorrect.'
            });
        }

        // Générer un token de session
        const sessionToken = generateToken(user.id);

        // Sauvegarder la session dans la base de données
        await createSessionModel(user.id, sessionToken);

        // Retourner le token à l'utilisateur
        res.status(200).json({
            status: 200,
            message: 'Connexion réussie.',
            sessionToken
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            error: 'Une erreur est survenue. Veuillez réessayer.'
        });
    }
};