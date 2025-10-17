import pool from "../config/db.js";

export default class Todo {
  static async getAll() {
    const result = await pool.query("SELECT * FROM tasks ORDER BY id");
    return result.rows;
  }

  static async addTask(title) {
    const result = await pool.query(
      "INSERT INTO tasks (title) VALUES ($1) RETURNING *",
      [title]
    );
    return result.rows[0];
  }

  static async deleteTask(id) {
    const result = await pool.query(
      "DELETE FROM tasks WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rows[0];
  }
}
