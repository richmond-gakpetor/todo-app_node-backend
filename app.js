require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const todoController = require("./controllers/todoController");

app.use(express.json());

app.get("/", function (req, res) {
  res.status(200).json({ message: "Welcome to isaa-todo-API" });
});
app.get("/todos", todoController.getAllTodo);
app.post("/todos", todoController.addTodo);
app.delete("/todos/:todoId", todoController.deleteTodoById);
app.patch("/todos/:todoId", todoController.updateTodoById);
app.get("/todos/:todoId", todoController.getTodoById);
const PORT = process.env.PORT || 3000;

// listener
app.listen(PORT, function () {
  console.log("Server has started to run...");
  mongoose
    .connect(process.env.DB_URL)
    .then(function () {
      console.log("DB is connected");
    })
    .catch(function (error) {
      console.log("DB is not connected: ", error.message);
    });
});
