import Todo from "../models/todoModel.js";

describe("Todo Model", () => {
  test("ajoute une tâche", async () => {
    const task = await Todo.addTask("Test Jest simple");
    expect(task).toHaveProperty("id");
    expect(task.title).toBe("Test Jest simple");
  });

  test("récupère toutes les tâches", async () => {
    const tasks = await Todo.getAll();
    expect(Array.isArray(tasks)).toBe(true);
    expect(tasks[0]).toHaveProperty("id");
    expect(tasks[0]).toHaveProperty("title");
  });

  test("supprime une tâche", async () => {
    const task = await Todo.addTask("À supprimer");
    const deleted = await Todo.deleteTask(task.id);
    expect(deleted).not.toBeNull();
    expect(deleted.id).toBe(task.id);
  });
});
