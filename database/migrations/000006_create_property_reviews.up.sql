CREATE TABLE property_reviews(
    id SERIAL PRIMARY KEY,
    booking_id INT UNIQUE NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
    property_id INT NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
    guest_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    rating INT NOT NULL,
    comment TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CHECK (rating BETWEEN 1 AND 5)
);

-- Create index pour rechercher tous les reviews d'une propriété
CREATE INDEX idx_property_id_reviews ON property_reviews(property_id);
CREATE INDEX idx_guest_id_property_reviews ON property_reviews(guest_id);
