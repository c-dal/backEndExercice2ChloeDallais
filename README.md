# ToDoList CLI - Node.js / Express (MVC)

## Description

Mini application **API REST** en Node.js pour gérer une liste de tâches.
Conçue avec une architecture **MVC** et orientée objet (POO), avec stockage persistant dans **PostgreSQL**.

Fonctionnalités :

* Ajouter / supprimer des tâches
* Afficher la liste des tâches
* Quitter l’application

L’application utilise **Express** pour exposer une API, que la CLI consomme via des requêtes HTTP.

---

## Structure du projet

```
backEndExercice1ChloeDallais/
│
├─ server.js                  # Entrée du serveur Express
├─ package.json               # Dépendances Node.js
├─ src/
   ├─ models/
   │  └─ todoModel.js         # Classe Todo
   ├─ controllers/
   │  └─ todoController.js    # Logique de gestion des routes et des commandes
   ├─ routes/
   │  └─ taskRoutes.js        # Définition des endpoints de l’API
   └─ config/
      └─ db.js                # Configuration de la base de données
```

---

## Installation & utilisation

1. Cloner le projet :

```bash
git clone <url_du_repo>
cd backEndExercice1ChloeDallais
```

2. Installer les dépendances :

```bash
npm install
```

3. Configuration du projet :

Copier env.example en .env et modifier si nécessaire.
Créer la base todolist et sa table tasks dans PostgreSQL, avec tous les droits pour l'utilisateur choisi.


4. Lancer le serveur Express :

```bash
npm run dev
```

5. Commandes disponibles dans l'API (dans un autre terminal):

```
# ajouter une tâche
curl -X POST http://localhost:3000/api/todos \
     -H "Content-Type: application/json" \
     -d '{"title": "Faire la vaisselle"}'

# supprimer une tâche par son ID
curl -X DELETE http://localhost:3000/api/todos/ID

# afficher toutes les tâches
curl http://localhost:3000/api/todos

# sinon utiliser Postman avec les même endpoints
```

---

## Notes techniques

* Architecture **MVC** pour séparation des responsabilités
* **POO** pour modularité et extensibilité 
* Persistance des données avec **PostgreSQL**
* Contrôleur et modèle utilisant des méthodes **statiques** pour accéder à la DB
* Tests via **curl**, Postman ou tout client HTTP

