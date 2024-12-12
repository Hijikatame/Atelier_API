-- Création de la base de données
CREATE DATABASE IF NOT EXISTS etername_db;
USE etername_db;

-- Table des utilisateurs
CREATE TABLE users (
    id SERIAL PRIMARY KEY,                      -- Identifiant unique
    pseudo VARCHAR(50) NOT NULL,                -- Nom d'utilisateur
    email VARCHAR(100) NOT NULL UNIQUE,         -- Email unique pour chaque utilisateur
    password_hash VARCHAR(255) NOT NULL,        -- Hash du mot de passe
    profile_photo VARCHAR(255),                 -- Chemin vers la photo de profil
    birth_date DATE,                            -- Date de naissance
    gender VARCHAR(10),                         -- Sexe : homme, femme, autre
    address TEXT,                               -- Adresse (facultatif)
    is_verified BOOLEAN DEFAULT FALSE,          -- Statut de vérification par email
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Date de création
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Dernière mise à jour
);

-- Table des tokens de vérification
CREATE TABLE email_verification_tokens (
    id SERIAL PRIMARY KEY,                     -- Identifiant unique
    user_id INT NOT NULL,                      -- Lien avec l'utilisateur
    token VARCHAR(255) NOT NULL,               -- Token de vérification
    expires_at TIMESTAMP NOT NULL,             -- Expiration du token
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Date de création
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE -- Cascade si l'utilisateur est supprimé
);

-- Table des sessions (pour JWT ou autre)
CREATE TABLE sessions (
    id SERIAL PRIMARY KEY,                     -- Identifiant unique
    user_id INT NOT NULL,                      -- Lien avec l'utilisateur
    token VARCHAR(255) NOT NULL,               -- Token de session
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Date de création
    expires_at TIMESTAMP NOT NULL,             -- Date d'expiration
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE -- Cascade si l'utilisateur est supprimé
);