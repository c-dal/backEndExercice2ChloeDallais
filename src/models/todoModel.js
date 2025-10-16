export default class Todo {
  constructor() {
    this.todos = [];
    this.id = 1;
  }

  getAll() {
    return this.todos;
  }

  addTask(title) {
    const newTask = { id: this.id++, title };
    this.todos.push(newTask);
    return newTask;
  }

  deleteTask(id) {
    const index = this.todos.findIndex(t => t.id === id);
    if (index !== -1) {
      return this.todos.splice(index, 1) [0];
    }
    return null;
  }
}
