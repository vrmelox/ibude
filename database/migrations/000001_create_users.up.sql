-- Créer les types ENUM
CREATE TYPE user_role AS ENUM ('host', 'guest', 'both');
CREATE TYPE user_status as ENUM ('verified', 'pending', 'processing');

-- Créer la table Users
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(150) NOT NULL,
    role user_role NOT NULL DEFAULT 'guest',
    adresse TEXT,
    note_globale DECIMAL(3,2) DEFAULT 0.00,
    profession TEXT,
    statut user_status NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Index sur email pour les recherches rapides
CREATE INDEX idx_users_email ON users(email);