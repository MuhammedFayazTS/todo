import express from "express";
import TodoService from "../services/todo.services.js";
import TodoRepository from "../repositories/todo.repository.js";
import TodoController from "../controllers/todo.controller.js";
import RedisCache from "../cache/redis.cache.js";
import redisClient from "../config/redis.js";

const router = express.Router();

const cache = new RedisCache(redisClient);
const todosRepository = new TodoRepository();
const todosService = new TodoService(todosRepository);
const todosController = new TodoController(todosService, cache);

router.get("/", todosController.getAll.bind(todosController));
router.post("/", todosController.create.bind(todosController));

export default router;
