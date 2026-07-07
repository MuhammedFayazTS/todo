import express from "express";

import todosRoutes from "./routes/todo.routes.js";
import connectDB from "./config/db.js";

const app = express();

app.use(express.json());

await connectDB();

app.use("/todos", todosRoutes);
app.use("/", (req, res) => res.json({ message: "Welcome to the Todo API" }));

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
