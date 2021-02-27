const mongoose = require("mongoose");
const TodoItemSchema = require("../models/ToDoItem");
const ToDoDateSchema = require("../models/ToDoDate");

const ToDoSchema = new mongoose.Schema({
    Date: ToDoDateSchema.schema,
    ToDoItem: [
        TodoItemSchema.schema
    ],
});
module.exports = mongoose.model("ToDo", ToDoSchema);
