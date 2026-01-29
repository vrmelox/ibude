# Démarrer
cd ~/projets/ibude/docker
docker compose up              # Mode attaché (voir les logs)
docker compose up -d           # Mode détaché (en arrière-plan)

# Arrêter
docker compose down            # Arrêter (garde les données)
docker compose down -v         # Arrêter ET supprimer les données

# Voir les containers qui tournent
docker ps

# Voir les logs
docker compose logs
docker compose logs -f         # Mode "follow" (temps réel)


# Depuis ton terminal
psql -h localhost -U ibude_user -d ibude_dev
# Mot de passe : ibude_password

# Depuis le container Docker
docker exec -it docker-postgres-1 psql -U ibude_user -d ibude_dev

migrate create -ext sql -dir . -seq nom_de_la_migration

# Exemple :
migrate create -ext sql -dir . -seq add_phone_to_users
# Crée : 000009_add_phone_to_users.up.sql
#        000009_add_phone_to_users.down.sql

# URL complète (copie-colle ça, c'est long !)
migrate -path . -database "postgresql://ibude_user:ibude_password@localhost:5432/ibude_dev?sslmode=disable" COMMANDE

# Commandes possibles :
up              # Appliquer toutes les migrations en attente
up 1            # Appliquer 1 migration
down            # Rollback toutes les migrations
down 1          # Rollback 1 migration
goto 5          # Aller à la migration version 5
version         # Voir la version actuelle
force 5         # Forcer la version (si erreur)

# Ajoute ça dans ton ~/.bashrc
echo 'alias ibude-migrate="migrate -path ~/projets/ibude/database/migrations -database \"postgresql://ibude_user:ibude_password@localhost:5432/ibude_dev?sslmode=disable\""' >> ~/.bashrc
source ~/.bashrc

# Maintenant tu peux faire :
ibude-migrate up
ibude-migrate down 1
ibude-migrate version

go get -u nom-du-package

# Exemples :
go get -u github.com/gin-gonic/gin
go get -u gorm.io/gorm

go mod tidy        # Nettoie les dépendances inutilisées
go mod download    # Télécharge les dépendances

go build .         # Compile (détecte les erreurs)
go fmt ./...       # Formate le code automatiquement
go vet ./...       # Analyse statique (détecte les bugs)

# GET
curl http://localhost:8080/ping

# POST avec JSON
curl -X POST http://localhost:8080/users \
  -H "Content-Type: application/json" \
  -d '{"email":"test@ibude.com","nom":"Dupont","prenom":"Jean"}'

# GET avec paramètre
curl http://localhost:8080/users/1

# PUT
curl -X PUT http://localhost:8080/users/1 \
  -H "Content-Type: application/json" \
  -d '{"nom":"Martin"}'

# DELETE
curl -X DELETE http://localhost:8080/users/1

# Installer httpie
sudo apt install httpie

# Utiliser
http GET http://localhost:8080/ping
http POST http://localhost:8080/users email=test@ibude.com nom=Dupont
```

---

# 🔗 RELATIONS SQL - RAPPEL

## 1️⃣ One-to-Many (1-to-N)

### Concept
**Un parent peut avoir plusieurs enfants, mais un enfant n'a qu'un seul parent.**

### Exemples Ibude
```
1 User → plusieurs Properties
1 Property → plusieurs PropertyImages
1 Booking → plusieurs BookingHistory

## Base de données
Pour se connecter à la BD
```bash
psql -h localhost -U ibude_user -d ibude_dev
```
