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

-- Insérer des données de test
INSERT INTO users (pseudo, email, password_hash, profile_photo, birth_date, gender, address, is_verified, created_at, updated_at)
VALUES
-- Membre 1
('JohnDoe', 'john.doe@example.com', '$2b$10$examplehash123', 'https://example.com/profiles/john.jpg', '1990-05-15', 'male', '123 Maple Street', TRUE, NOW(), NOW()),
-- Membre 2
('JaneSmith', 'jane.smith@example.com', '$2b$10$examplehash456', 'https://example.com/profiles/jane.jpg', '1988-10-22', 'female', '456 Oak Avenue', TRUE, NOW(), NOW()),
-- Membre 3
('BobBrown', 'bob.brown@example.com', '$2b$10$examplehash789', NULL, '1995-03-12', 'male', '789 Pine Lane', FALSE, NOW(), NOW()),
-- Membre 4
('AliceWhite', 'alice.white@example.com', '$2b$10$examplehash101', 'https://example.com/profiles/alice.jpg', '2000-07-30', 'female', NULL, TRUE, NOW(), NOW()),
-- Membre 5
('CharlieBlack', 'charlie.black@example.com', '$2b$10$examplehash102', NULL, '1985-12-01', 'male', '101 Birch Way', TRUE, NOW(), NOW()),
-- Membre 6
('EmilyGreen', 'emily.green@example.com', '$2b$10$examplehash103', 'https://example.com/profiles/emily.jpg', '1992-08-14', 'female', '202 Cedar Street', TRUE, NOW(), NOW()),
-- Membre 7
('FrankBlue', 'frank.blue@example.com', '$2b$10$examplehash104', NULL, '1987-06-20', 'male', '303 Spruce Court', FALSE, NOW(), NOW()),
-- Membre 8
('GraceYellow', 'grace.yellow@example.com', '$2b$10$examplehash105', 'https://example.com/profiles/grace.jpg', '1999-09-09', 'female', NULL, TRUE, NOW(), NOW()),
-- Membre 9
('HenryRed', 'henry.red@example.com', '$2b$10$examplehash106', 'https://example.com/profiles/henry.jpg', '1993-11-25', 'male', '404 Elm Street', TRUE, NOW(), NOW()),
-- Membre 10
('IsabelOrange', 'isabel.orange@example.com', '$2b$10$examplehash107', NULL, '1984-04-04', 'female', '505 Fir Avenue', FALSE, NOW(), NOW()),
-- Membre 11
('JackPurple', 'jack.purple@example.com', '$2b$10$examplehash108', 'https://example.com/profiles/jack.jpg', '1998-01-15', 'male', '606 Ash Drive', TRUE, NOW(), NOW()),
-- Membre 12
('KarenPink', 'karen.pink@example.com', '$2b$10$examplehash109', 'https://example.com/profiles/karen.jpg', '1991-02-28', 'female', '707 Willow Way', TRUE, NOW(), NOW()),
-- Membre 13
('LiamGray', 'liam.gray@example.com', '$2b$10$examplehash110', NULL, '1996-10-10', 'male', '808 Redwood Circle', FALSE, NOW(), NOW()),
-- Membre 14
('NoraSilver', 'nora.silver@example.com', '$2b$10$examplehash111', 'https://example.com/profiles/nora.jpg', '1994-12-12', 'female', NULL, TRUE, NOW(), NOW()),
-- Membre 15
('OscarGold', 'oscar.gold@example.com', '$2b$10$examplehash112', 'https://example.com/profiles/oscar.jpg', '1989-03-05', 'male', '909 Aspen Place', TRUE, NOW(), NOW());