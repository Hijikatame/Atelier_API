import argon2 from 'argon2';

export const hashPassword = async (req, res, next) => {
    const { password } = req.body;

    try {
        // Hachage du mot de passe
        const hashedPassword = await argon2.hash(password);

        // Remplacement du mot de passe en clair par le mot de passe haché
        req.body.password = hashedPassword;

        // Passer à la suite
        next();
    } catch (error) {
        console.error("Erreur lors du hachage du mot de passe :", error);
        res.status(500).json({
            status: 500,
            message: "Erreur interne lors du traitement du mot de passe."
        });
    }
};
