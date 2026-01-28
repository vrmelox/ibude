package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/vrmelo/ibude/config"
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
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	// Démarrer le serveur
	r.Run(":8080")
}