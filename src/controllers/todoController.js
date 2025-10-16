import Todo from "../models/todoModel.js";

const todoModel = new Todo();

export default class TodoController {
    static list(req, res) {
        res.json(todoModel.getAll());
    }

    static add(req, res) {
        const { title } = req.body;
        if (!title) return res.status(400).json({ error: "Le titre est requis" });
        const newTask = todoModel.addTask(title);
        res.status(201).json(newTask);
    }

    static delete(req, res) {
        const id = parseInt(req.params.id);
        const deletedTask = todoModel.deleteTask(id);
        if (!deletedTask) return res.status(404).json({ error: "Tache introuvable" });
        res.json({ message: "Tache supprimée avec succes" });
    }
}