const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({ path: "backend/.env" });
app.use(cors());
app.use(bodyParser.json());

const mongoose = require("mongoose");
//connection to db

mongoose.set("useFindAndModify", false);

//models
const Chapter = require("./models/Chapter");

// POST METHOD
app.post("/", async (req, res) => {
  const chapter = new Chapter({
    content: req.body.content,
  });
  try {
    await chapter.save();
    res.redirect("/");
  } catch (err) {
    res.redirect("/");
  }
});

// GET METHOD
app.get("/chapters", (req, res) => {
  Chapter.find({}, (err, chaps) => {
    res.send({ chapters: chaps });
  });
});

app.post("/chapters/save", (req, res, next) => {
  const id = req.body.id;
  Chapter.findByIdAndUpdate(id, req.body, (err) => {
    if (err) return res.send(500, err);
    res.redirect("/chapters");
  });
});

//UPDATE
app
  .route("/edit/:id")
  .get((req, res) => {
    const id = req.params.id;
    Chapter.find({}, (err, chaps) => {
      res.send({ chapters: chaps, idTask: id });
    });
  })
  .post((req, res) => {
    const id = req.params.id;
    Chapter.findByIdAndUpdate(id, { content: req.body.content }, (err) => {
      if (err) return res.send(500, err);
      res.redirect("/");
    });
  });

//DELETE
app.route("/remove/:id").get((req, res) => {
  const id = req.params.id;
  Chapter.findByIdAndRemove(id, (err) => {
    if (err) return res.send(500, err);
    res.redirect("/");
  });
});

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to db!");
    app.listen(3000, () => console.log("Server Up and running"));
  }
);
