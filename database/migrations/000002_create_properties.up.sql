CREATE TYPE property_type AS ENUM ('chambre', 'maison', 'appartement', 'studio');

CREATE TABLE properties(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    type property_type NOT NULL,
    nombre_chambres INT NOT NULL DEFAULT 1,
    adresse TEXT NOT NULL,
    tarif_nuit DECIMAL(10,2),
    tarif_semaine DECIMAL(10,2),
    tarif_mois DECIMAL(10,2),
    disponible BOOLEAN NOT NULL DEFAULT true,
    dispo_until TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Index pour rechercher par propriétaire
CREATE INDEX idx_properties_user_id ON properties(user_id);

-- Index pour rechercher les propriétés disponibles
CREATE INDEX idx_properties_disponible ON properties(disponible);

-- **Règle** : Index sur les clés étrangères et les colonnes de recherche fréquente.
