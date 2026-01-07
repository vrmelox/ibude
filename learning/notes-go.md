## Initialisation
Pour initialiser un projet go : go mod init github.com/vrmelo/ibude
C'est le module path (chemin du module)En Go, chaque projet a un identifiant unique appelé module path. Ça sert à :
Identifier ton projet de manière unique dans l'écosystème Go
Importer ton code depuis d'autres packages
Publier sur GitHub (si tu veux partager ton code)

## Phase 2 : Installer les dépendances
Pour ton MVP, tu auras besoin de :

Gin → Framework web (comme Express.js en Node)
GORM → ORM pour interagir avec PostgreSQL
PostgreSQL driver → Pour se connecter à la DB

```bash
# Framework web Gin
go get -u github.com/gin-gonic/gin

# ORM GORM
go get -u gorm.io/gorm

# Driver PostgreSQL pour GORM
go get -u gorm.io/driver/postgres

# Variables d'environnement (optionnel mais utile)
go get -u github.com/joho/godotenv
```

## Structures d'un projet propre et maintenable
backend/go/
├── go.mod
├── go.sum
├── .env                    ← Variables d'environnement
├── main.go                 ← Point d'entrée
├── config/
│   └── database.go         ← Connexion DB
├── models/
│   ├── user.go
│   ├── property.go
│   └── booking.go
├── handlers/
│   ├── user_handler.go
│   ├── property_handler.go
│   └── booking_handler.go
└── routes/
    └── routes.go           ← Définition des routes