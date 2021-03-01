const mongoose = require("mongoose");
const chpaterSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    default: '',
  },
});
module.exports = mongoose.model("Chapter", chpaterSchema);
