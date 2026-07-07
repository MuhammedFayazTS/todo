class TodoService {
  constructor(repository) {
    this.repository = repository;
  }

  async getAll() {
    return this.repository.getAll();
  }

  async create({ title, description }) {
    return this.repository.create({ title, description });
  }
}

export default TodoService;