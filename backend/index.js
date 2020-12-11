const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

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
app.get("/", (req, res) => {
  console.log('here')
  Chapter.find({}, (err, chaps) => {
    res.send({ chapters: chaps });
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

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("Connected to db!");
  app.listen(3000, () => console.log("Server Up and running"));
});
