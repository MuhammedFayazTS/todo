import Todo from "../models/todo.model.js";

class TodoRepository {
  async getAll() {
    return await Todo.find();
  }

  async create({ title, description }) {
    return await Todo.create({
      title,
      description,
    });
  }

  async getById(id) {
    return await Todo.findById(id);
  }

  async update(id, data) {
    return await Todo.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  }

  async delete(id) {
    return await Todo.findByIdAndDelete(id);
  }
}

export default TodoRepository;