class TodoController {
  constructor(service) {
    this.service = service;
  }

  async create(req, res) {
    const { title, description } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }

    const todo = await this.service.create(title, description);
    return res.status(201).json(todo);
  }

  async getAll(req, res) {
    const todos = await this.service.getAll();
    return res.status(200).json(todos);
  }
}

export default TodoController;
