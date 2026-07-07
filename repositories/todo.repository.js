class TodoRepository {
  constructor() {
    this.todos = [];
  }

  async getAll() {
    return this.todos;
  }

  async create({ title, description }) {
    const todo = { title, description };
    this.todos.push(todo);
    return todo;
  }
}

export default TodoRepository;
