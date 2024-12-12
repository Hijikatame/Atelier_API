import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';
import { createUser, findUserByEmail, saveVerificationToken, findToken, updateUserVerificationStatus } from '../models/getRegisterModel.js';

export const getRegisterController = async (req, res) => {
    const { pseudo, email, password } = req.body;

    if (!pseudo || !email || !password) {
        return res.status(400).json({ 
            status: 400,
            error: 'Tous les champs sont obligatoire' 
        });
    }

    try {
        // Vérifier si l'utilisateur existe déjà
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({
                status: 400,
                error: 'Cet email est déjà utilisé.'
            });
        }

        // Hash du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Créer l'utilisateur dans la base de données
        const newUser = await createUser({ pseudo, email, password_hash: hashedPassword });

        // Générer un token de vérification
        const verificationToken = uuidv4();
        const tokenExpiration = new Date(Date.now() + 3600000); // 1 heure
        
        await saveVerificationToken({
            user_id: newUser.id,
            token: verificationToken,
            expires_at: tokenExpiration,
        });

        // Envoyer l'email de vérification
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587, // Port pour STARTTLS
            secure: false, // Utiliser STARTTLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const verificationLink = `http://localhost:5500/api/verify?token=${verificationToken}`;

        await transporter.sendMail({
            from: '"Etern\'Âme" <hijikatame16@gmail.com>',
            to: email,
            subject: 'Vérification de votre email pour Etern\'Âme',
            text: `Bonjour ${pseudo}, cliquez sur ce lien pour vérifier votre compte : ${verificationLink}`,
            html: `<p>Bonjour <strong>${pseudo}</strong>,</p><p>Veuillez vérifier votre compte en cliquant sur le lien suivant : <a href="${verificationLink}">${verificationLink}</a></p>`,
        });

        res.status(201).json({
            status: 201,
            message: 'Compte créé avec succès. Vérifiez votre email pour activer votre compte.'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            error: 'Une erreur est survenue. Veuillez réessayer plus tard.'
        });
    }
};

// Contrôleur pour la vérification
export const verifyUserController = async (req, res) => {
    const { token } = req.query;

    if (!token) {
        return res.status(400).json({
            status: 400,
            error: 'Token non fourni.'
        });
    }

    try {
        const tokenData = await findToken(token);
        console.log('Données du token trouvées :', tokenData);
        if (!token || tokenData.expires_at < new Date()) {
            return res.status(400).json({
                status: 400,
                error: 'Token invalide ou expiré'
            });
        }

        await updateUserVerificationStatus(tokenData.user_id);

        res.status(200).json({
            status: 200,
            message: 'Compte vérifié avec succès.'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            error: 'Une erreur est survenue. Veuillez réessayer plus tard.'
        });
    }
};