import express from "express";

import todosRoutes from "./src/routes/todo.routes.js";

const app = express();

app.use(express.json());

app.use("/todos", todosRoutes);
app.use("/", (req, res) => res.json({ message: "Welcome to the Todo API" }));


export default app;