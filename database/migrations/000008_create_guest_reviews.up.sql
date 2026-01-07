CREATE TABLE guest_reviews(
    id SERIAL PRIMARY KEY,
    booking_id INT UNIQUE NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
    guest_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    host_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    rating INT NOT NULL,
    comment TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CHECK (rating BETWEEN 1 AND 5)
);

CREATE INDEX idx_guest_id_guest_reviews ON guest_reviews(guest_id);
CREATE INDEX idx_host_id_guest_reviews ON guest_reviews(host_id);