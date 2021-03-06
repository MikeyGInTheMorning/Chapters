const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const app = express();

const chapters = require('./routes/chapters')
const chapterPropertyNodes = require("./routes/chapterPropertyNodes");
const todos = require("./routes/toDos");


dotenv.config({ path: `${__dirname}/.env` });
app.use(cors());
app.use(bodyParser.json());

mongoose.set("useFindAndModify", false);

app.use('/chapters', chapters)
app.use("/chapterPropertyNodes", chapterPropertyNodes);
app.use("/todos", todos);
console.log(process.env.DB_CONNECT)
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to db!");
    app.listen(process.env.PORT, () => console.log("Server Up and running"));
  }
);
