package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/vrmelo/ibude/handlers"
)

// SetupRoutes configure toutes les routes de l'API
func SetupRoutes(router *gin.Engine) {
	// Route de test
	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "pong"})
	})
	
	// Routes Users
	router.GET("/users", handlers.GetUsers)
	router.POST("/users", handlers.CreateUser)
}