const express = require("express");
const router = express.Router();

const Chapter = require("../models/Chapter");

router.get("/", (req, res, next) => {
  Chapter.find({}, (err, chaps) => {
    res.send({ chapters: chaps });
  });
});

router.post("/remove", (req, res) => {
  const id = req.body._id;
  console.log(req.body);
  Chapter.findByIdAndRemove(id, (err) => {
    if (err) return res.send(500, err);
    res.send(200);
  });
});

router.post("/save", (req, res, next) => {
  const id = req.body._id;
  if (id) {
    Chapter.findByIdAndUpdate(id, new Chapter(req.body), (err) => {
      if (err) return res.send(500, err);
      res.send(200);
    });
  } else {
    const chapter = new Chapter(req.body);
    chapter.save().then((err) => {
      if (err) return res.send(500, err);
      res.send(200);
    });
  }
});

module.exports = router;
