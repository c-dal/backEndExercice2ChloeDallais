-- Créer la table tasks_pg
CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
);
 
-- Vérifier la table
\d tasks_pg