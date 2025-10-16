# ToDoList CLI - Node.js / Express (MVC)

## Description

Mini application **CLI** en Node.js pour gérer une liste de tâches.
Conçue avec une architecture **MVC** et orientée objet (POO).

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

3. Configuration des variables d'environnement :

Copier env.example en .env et modifier si nécessaire.


4. Lancer le serveur Express :

```bash
npm run dev
```

5. Commandes disponibles dans la CLI (dans un autre terminal):

```
# ajouter une tâche
curl -X POST http://localhost:3000/api/todos \
     -H "Content-Type: application/json" \
     -d '{"title": "Faire la vaisselle"}'

# supprimer une tâche par son ID
curl -X DELETE http://localhost:3000/api/todos/ID

# afficher toutes les tâches
curl http://localhost:3000/api/todos
```

---

## Exemple

```
> add faire la vaisselle
Tâche 'faire la vaisselle' ajoutée.
> add plier le linge
Tâche 'plier le linge' ajoutée.
> display
0. faire la vaisselle
1. plier le linge
> delete 0
Tâche 0 supprimée.
> display
0. plier le linge
```

---

## Notes techniques

* Architecture **MVC** pour séparation des responsabilités
* **POO** pour modularité et extensibilité (`class Task` et `class ToDoList`)
* Liste centralisée dans `ToDoList`
* API avec **Express** pour exposer les actions `add`, `delete` et `display`
* CLI communiquant avec l’API via requêtes HTTP (avec `fetch` ou `axios`)
