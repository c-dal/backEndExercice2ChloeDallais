import Todo from "../models/todoModel.js";

export default class TodoController {
  static async list(req, res) {
    try {
      const todos = await Todo.getAll();
      res.json(todos);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erreur lors de la récupération des tâches" });
    }
  }

  static async add(req, res) {
    try {
      const { title } = req.body;
      if (!title) {
        return res.status(400).json({ error: "Le titre est requis" });
      }
      const newTask = await Todo.addTask(title);
      res.status(201).json(newTask);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erreur lors de l’ajout de la tâche" });
    }
  }

  static async delete(req, res) {
    try {
      const id = parseInt(req.params.id);
      const deleted = await Todo.deleteTask(id);
      if (!deleted) {
        return res.status(404).json({ error: "Tâche introuvable" });
      }
      res.json({ message: "Tâche supprimée avec succès" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erreur lors de la suppression" });
    }
  }
}
