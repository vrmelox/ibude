package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/vrmelo/ibude/config"
	"github.com/vrmelo/ibude/models"
)

func GetUsers(c *gin.Context) {
	var users []models.User
	
	// Récupérer tous les users depuis la DB
	result := config.DB.Find(&users)
	
	// Vérifier s'il y a une erreur
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to fetch users",
		})
		return
	}
	
	// Retourner les users en JSON
	c.JSON(http.StatusOK, gin.H{
		"users": users,
		"count": len(users),
	})
}