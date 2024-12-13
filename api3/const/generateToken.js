import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Charger les variables d'environnement depuis .env
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '10h';

// Fonction pour générer un token de vérification
export const generateToken = (userId) => {
    return jwt.sign(
        { userId },
        JWT_SECRET, 
        { expiresIn: JWT_EXPIRATION }
    );
};
