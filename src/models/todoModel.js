import pool from "../config/db.js";
import TodoMongo from "./todoMongo.js";

const useMongo = process.env.MONGO === "true";

export default class Todo {
  // Récupère toutes les tâches
  static async getAll() {
    if (useMongo) {
      return await TodoMongo.find();
    } else {
      const result = await pool.query("SELECT * FROM tasks ORDER BY id");
      return result.rows; 
    }
  }

  // Ajoute une nouvelle tâche
  static async addTask(title) {
    if (useMongo) {
      const todo = new TodoMongo({ title });
      return await todo.save();
    } else {
      const result = await pool.query(
        "INSERT INTO tasks (title) VALUES ($1) RETURNING *",
        [title]
      );
      return result.rows[0]; 
    }
  }

  // Supprime une tâche par son id
  static async deleteTask(id) {
    if (useMongo) {
      const deleted = await TodoMongo.findOneAndDelete(id);
      return deleted;
    } else {
      const result = await pool.query(
        "DELETE FROM tasks WHERE id = $1 RETURNING *",
        [id]
      );
      return result.rows[0];
    }
  }
}
