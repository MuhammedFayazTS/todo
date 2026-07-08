import { CACHE_KEYS } from "../constants/cache_keys.js";
import { validateCreateTodo } from "../utils/validators/todo.validator.js";

class TodoController {
  constructor(service, cache) {
    this.service = service;
    this.cache = cache;
  }

  async create(req, res) {
    const { isValid, message, data } = validateCreateTodo(req.body);
    if (!isValid) {
      return res.status(400).json({ message });
    }

    const todo = await this.service.create(data);

    await this.cache.del(CACHE_KEYS.TODOS);

    return res.status(201).json(todo);
  }

  async getAll(req, res) {
    const cacheKey = CACHE_KEYS.TODOS;

    const cached = await this.cache.get(cacheKey);

    if (cached) {
      console.log("Cache Hit");
      return res.status(200).json(JSON.parse(cached));
    }

    console.log("Cache Miss");

    const todos = await this.service.getAll();

    await this.cache.set(cacheKey, JSON.stringify(todos));

    return res.status(200).json(todos);
  }
}

export default TodoController;
