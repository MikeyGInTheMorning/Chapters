const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const chapters = require('./routes/chapters')

const app = express();

dotenv.config({ path: "backend/.env" });
app.use(cors());
app.use(bodyParser.json());

mongoose.set("useFindAndModify", false);

app.use('/chapters', chapters)

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to db!");
    app.listen(3000, () => console.log("Server Up and running"));
  }
);
