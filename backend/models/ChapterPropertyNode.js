const mongoose = require("mongoose");
const chapterPropertyNode = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    default: "",
  },
  Type: {
    type: String,
    default: "",
  },
  IsMainLevel: {
    type: Boolean,
    default: true,
  },
  PercentCompleted: {
    type: Number,
    default: 0,
  },
  Parent: {
    type: mongoose.Schema.Types.ObjectId
  },
  Children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      default: [],
    },
  ],
  Links: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});
module.exports = mongoose.model("ChapterPropertyNode", chapterPropertyNode);
