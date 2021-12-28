const Todo = require("../models/Todo");

async function addTodo(req, res) {
  try {
    const newTodo = await Todo.create(req.body);
    res.status(200).json(newTodo);
  } catch (error) {
    console.log("can't add data: ", error.message);
    res.status(401).json({ message: "can't add data" });
  }
}

async function deleteTodoById(req, res) {
  const todoId = req.params.todoId;
  try {
    await Todo.findByIdAndDelete(todoId);
    res.status(200).json({ message: "todo has been deleted" });
  } catch (error) {
    console.log("can't delete todo: ", error.message);
    res.status(401).json({ error: error.message });
  }
}

async function updateTodoById(req, res) {
  const todoId = req.params.todoId;
  const body = req.body;
  try {
    const todo = await Todo.findByIdAndUpdate(todoId, body);
    res.status(200).json({ message: "Todo is updated" });
  } catch (error) {
    console.log("Can't update: ", error.message);
  }
}

async function getTodoById(req, res) {
  try {
    const todo = await Todo.findById(req.params.todoId);
    res.status(200).json(todo);
  } catch (error) {
    console.log("can't get todo: ", error.message);
  }
}

async function getAllTodo(req, res) {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    console.log("Cant get data: ", error.message);
  }
}

module.exports = {
  addTodo,
  deleteTodoById,
  updateTodoById,
  getAllTodo,
  getTodoById,
};
