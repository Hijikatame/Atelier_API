export const validateUserData = (req, res, next) => {
    const { pseudo, email, password } = req.body;

    // Vérification que tous les champs sont présents
    if (!pseudo || !email || !password) {
        return res.status(400).json({
            status: 400,
            message: "Tous les champs (pseudo, email, mot de passe) sont obligatoires."
        });
    }

    // Vérification de la validité de l'email avec une regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        return res.status(400).json({
            status: 400,
            message: "Veuillez entrer un email valide."
        });
    }

    // Validation des autres champs si nécessaire (par exemple, vérifier que le mot de passe est suffisamment long)
    if (password.length < 7) {
        return res.status(400).json({
            status: 400,
            message: "Le mot de passe doit contenir au moins 7 caractères."
        });
    }

    // Si toutes les validations passent, on passe à la suite
    next();
};
