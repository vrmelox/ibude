package models

import "time"


type User struct {
	ID          uint      `gorm:"primaryKey" json:"id"`
	Email       string    `gorm:"unique;not null" json:"email"`
	Nom         string    `gorm:"size:100;not null" json:"nom"`
	Prenom      string    `gorm:"size:150;not null" json:"prenom"`
	Role        string    `gorm:"type:user_role;not null;default:'guest'" json:"role"`
	Adresse     string    `json:"adresse,omitempty"`
	NoteGlobale float64   `gorm:"type:decimal(3,2);default:0.00" json:"note_globale"`
	Profession  string    `json:"profession,omitempty"`
	Statut      string    `gorm:"type:user_status;not null;default:'pending'" json:"statut"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
}
