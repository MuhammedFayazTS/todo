import express from "express";
import TodoService from "../services/todo.services.js";
import TodoRepository from "../repositories/todo.repository.js";
import TodoController from "../controllers/todo.controller.js";

const router = express.Router();

const todosRepository = new TodoRepository();
const todosService = new TodoService(todosRepository);
const todosController = new TodoController(todosService);

router.get("/", todosController.getAll.bind(todosController));
router.post("/", todosController.create.bind(todosController));

export default router;
