CREATE TABLE booking_history(
    id SERIAL PRIMARY KEY,
    booking_id INT REFERENCES bookings(id) ON DELETE SET NULL,
    old_status booking_status NOT NULL,
    new_status booking_status NOT NULL,
    changed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    changed_by INT REFERENCES users(id) ON DELETE SET NULL
);

-- Create index pour rechercher l'historique d'un booking
CREATE INDEX idx_booking_id_history ON booking_history(booking_id);