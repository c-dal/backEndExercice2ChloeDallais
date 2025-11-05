

// Fichier createdb.sql

// Se connecter à la base avec le superuser
// ```
// sudo -u postgres psql 
// ```
// Créer la base et l'utilisateur
// ```
// CREATE DATABASE todolist; 
// CREATE USER user WITH PASSWORD 'mdp';
// ```
// Se connecter à todolist créer la table tasks
// ```
// \c todolist
// CREATE TABLE tasks (
//     id SERIAL PRIMARY KEY,
//     title TEXT NOT NULL
// );
// ```
// Gérer les droits de la base
// ```
// GRANT ALL PRIVILEGES ON TABLE tasks TO user;
// GRANT ALL PRIVILEGES ON SEQUENCE tasks_id_seq TO user;
// ```