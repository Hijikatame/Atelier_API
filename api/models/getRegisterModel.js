import database from '../db/database.js';

// Créer un utilisateur
export const createUser = async ({ pseudo, email, password_hash }) => {
    const [result] = await database.query(
        `INSERT INTO users (pseudo, email, password_hash, is_verified, created_at, updated_at) 
         VALUES (?, ?, ?, ?, NOW(), NOW())`,
        [pseudo, email, password_hash, false]
    );
    
    // Récupérer l'ID du nouvel utilisateur
    const userId = result.insertId;  // Récupère l'ID du nouvel utilisateur inséré
    return { id: userId, email };  // Retourne l'ID et l'email
};

// Trouver un utilisateur par email
export const findUserByEmail = async (email) => {
    const [rows] = await database.query(
        `SELECT * FROM users WHERE email = ?`,
        [email]
    );
    if (rows.length > 0) {
        return rows[0]; // Si des résultats existent, on retourne le premier utilisateur
    }
    return null; // Si aucun utilisateur n'est trouvé, on retourne null
};

// Sauvegarder un token de vérification
export const saveVerificationToken = async ({ user_id, token, expires_at }) => {
    await database.query(
        `INSERT INTO email_verification_tokens (user_id, token, expires_at) 
         VALUES (?, ?, ?)`,
        [user_id, token, expires_at]
    );
};

// Trouver un token de vérification
export const findToken = async (token) => {
    console.log('Token transmis à SQL :', token);
    const [rows] = await database.query(
        `SELECT * FROM email_verification_tokens WHERE token = ?`,
        [token]
    );

    console.log('Résultat SQL :', rows); // Log pour vérifier les données retournées
    return rows.length > 0 ? rows[0] : null; // Retourne le premier résultat ou null si aucun résultat
};

// Mettre à jour le statut de vérification d'un utilisateur
export const updateUserVerificationStatus = async (user_id) => {
    await database.query(
        `UPDATE users SET is_verified = true WHERE id = ?`,
        [user_id]
    );
};