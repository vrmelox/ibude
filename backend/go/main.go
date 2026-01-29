package main

import (
	"log"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/vrmelo/ibude/config"
	"github.com/vrmelo/ibude/routes"
)

func authorizeCors(r *gin.Engine) {
		// ========== CONFIGURATION CORS ==========
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000", "http://localhost:5173"},  // Frontend URLs
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))
	// =========================================
}
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
	authorizeCors(r)
	// Route de test
	routes.SetupRoutes(r)

	// Démarrer le serveur
	r.Run(":8080")
}
