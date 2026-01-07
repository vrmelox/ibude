CREATE TYPE booking_status AS ENUM ('pending', 'confirmed', 'paid', 'completed', 'cancelled');

CREATE TABLE bookings(
    id SERIAL PRIMARY KEY,
    property_id INT NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
    guest_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    status booking_status NOT NULL DEFAULT 'pending',
    check_in_date TIMESTAMP NOT NULL,
    check_out_date TIMESTAMP NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CHECK (check_in_date < check_out_date)
);

-- Create index pour rechercher les bookings d'une propriété
CREATE INDEX idx_property_id_bookings ON bookings(property_id);
-- Create index pour rechercher les bookings d'un guest propriété
CREATE INDEX idx_guest_id_bookings ON bookings(guest_id);
-- Create index pour rechercher les bookings par statut
CREATE INDEX idx_status_bookings ON bookings(status);