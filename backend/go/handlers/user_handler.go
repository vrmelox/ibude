package handlers

import (
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/vrmelo/ibude/config"
	"github.com/vrmelo/ibude/models"
	"gorm.io/gorm"
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

func FindUserById(c *gin.Context) {
	id := c.Param("id")

	var user models.User
	result := config.DB.Where("id = ?", id).First(&user)
	//result := config.DB.First(&user, id)

    if result.Error != nil {
        if errors.Is(result.Error, gorm.ErrRecordNotFound) {
            c.JSON(http.StatusNotFound, gin.H{
                "error": "User not found",
            })
            return
        }

        c.JSON(http.StatusInternalServerError, gin.H{
            "error": "Database error",
            "details": result.Error.Error(),
        })
        return
    }

    c.JSON(http.StatusOK, gin.H{
        "user": user,
    })
}

func UpdateUser(c *gin.Context) {
	id := c.Param("id")
	var userUpdate models.User

	// Parser le JSON
	if err := c.ShouldBindJSON(&userUpdate); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid JSON",
			"details": err.Error(),
		})
		return
	}

	// Vérifier que le user existe
	var existingUser models.User
	result := config.DB.First(&existingUser, id)
	if result.Error != nil {
		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
			c.JSON(http.StatusNotFound, gin.H{
				"error": "User not found",
			})
			return
		}

		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Database error",
			"details": result.Error.Error(),
		})
		return
	}

	// Mettre à jour
	result = config.DB.Model(&existingUser).Updates(userUpdate)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to update user",
			"details": result.Error.Error(),
		})
		return
	}

	// Retourner le user mis à jour
	c.JSON(http.StatusOK, gin.H{
		"message": "User successfully updated",
		"user": existingUser,
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