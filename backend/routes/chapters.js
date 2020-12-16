const express = require("express");
const router = express.Router();

const Chapter = require("../models/Chapter");

router.get("/", (req, res, next) => {
  Chapter.find({}, (err, chaps) => {
    res.send({ chapters: chaps });
  });
});

router.get("/:id", (req, res, next) => {
  Chapter.find({ _id: req.params.id }, (err, chaps) => {
    if (err) return res.send(500, err);
    res.send({
      chapter: chaps && chaps.length > 0 ? chaps[0] : [],
    });
  });
});

router.post("/remove", (req, res) => {
  const id = req.body._id;
  console.log(req.body);
  Chapter.findByIdAndRemove(id, (err) => {
    if (err) return res.send(500, err);
    res.sendStatus(200);
  });
});

router.post("/save", (req, res, next) => {
  const id = req.body._id;
  if (id) {
    Chapter.findByIdAndUpdate(
      id,
      new Chapter(req.body),
      { new: true },
      (err, changed, b) => {
        if (err) return res.send(500, err);
        res.status(200).send(changed);
      }
    );
  } else {
    const chapter = new Chapter(req.body);
    chapter.save().then((err, changed) => {
      if (err) return res.send(500, err);
      res.status(200).send(changed);
    });
  }
});

module.exports = router;
