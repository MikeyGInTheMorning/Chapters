const mongoose = require("mongoose");

const ToDoDate = new mongoose.Schema({
    Day: {
        type: Number,
        default: 1
    },
    Month: {
        type: Number,
        default: 1
    },
    Year: {
        type: Number,
        default: 1969
    },
    TimeStamp: {
        type: Date
    }
});
module.exports = mongoose.model("ToDoDate", ToDoDate);