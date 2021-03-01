const mongoose = require("mongoose");
const ToDoItem = new mongoose.Schema({
    Label: {
        type: String,
        default: "",
    },
    Completed: {
        type: Boolean,
        default: false,
    }
});
module.exports = mongoose.model("ToDoItem", ToDoItem);
