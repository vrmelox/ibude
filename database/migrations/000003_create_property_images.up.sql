CREATE TABLE property_images(
    id SERIAL PRIMARY KEY,
    property_id INT NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
    url TEXT NOT NULL,
    "order" INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_property_image_order UNIQUE(property_id, "order")
);

-- Create index pour rechercher les images d'une propriété
CREATE INDEX idx_property_id ON property_images(property_id);