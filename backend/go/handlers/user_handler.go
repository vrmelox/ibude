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

func CreateUser(c *gin.Context) {
	var user models.User

	// Parser le JSON du body dans la struct user
	if err := c.ShouldBindJSON(&user); err != nil {  // ← Ajoute le &
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid JSON",
			"details": err.Error(),
		})
		return
	}
	
	result := config.DB.Create(&user)

	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to create user",
			"details": result.Error.Error(),
		})
		return
	}
	
	c.JSON(http.StatusCreated, gin.H{
		"message": "User created successfully",
		"user": user,
	})
}