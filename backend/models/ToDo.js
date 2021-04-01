const mongoose = require("mongoose");
const TodoItemSchema = require("../models/ToDoItem");
const ToDoDateSchema = require("../models/ToDoDate");
const JournalEntry = require("../models/JournalEntry")

const ToDoSchema = new mongoose.Schema({
    Date: ToDoDateSchema.schema,
    ToDoItem: [
        TodoItemSchema.schema
    ],
    JournalEntries: [
        JournalEntry.schema
    ]
});
module.exports = mongoose.model("ToDo", ToDoSchema);
