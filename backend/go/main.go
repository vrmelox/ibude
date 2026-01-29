package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/vrmelo/ibude/config"
	"github.com/vrmelo/ibude/routes"
)

func main() {
	// Charger les variables d'environnement
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// Connexion à la base de données
	config.ConnectDatabase()

	// Créer le routeur Gin
	r := gin.Default()

	// Route de test
	routes.SetupRoutes(r)

	// Démarrer le serveur
	r.Run(":8080")
}
