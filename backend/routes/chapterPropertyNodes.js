const express = require("express");
const router = express.Router();

const ChapterPropertyNode = require("../models/ChapterPropertyNode");

router.get("/", (req, res, next) => {
  ChapterPropertyNode.find({}, (err, chaps) => {
    res.send({ chapterPropertyNodes: chaps });
  });
});

router.get("/:id", (req, res, next) => {
  ChapterPropertyNode.find({ _id: req.params.id }, (err, chaps) => {
    if (err) return res.send(500, err);
    res.send({
      chapterPropertyNode: chaps && chaps.length > 0 ? chaps[0] : [],
    });
  });
});

router.get("/parent/:id", (req, res, next) => {
  ChapterPropertyNode.find({ Parent: req.params.id }, (err, chaps) => {
    if (err) return res.send(500, err);
    res.send({
      chapterPropertyNodes: chaps && chaps.length > 0 ? chaps : [],
    });
  });
});

router.post("/remove", (req, res) => {
  const id = req.body._id;
  console.log(req.body);
  ChapterPropertyNode.findByIdAndRemove(id, (err) => {
    if (err) return res.send(500, err);
    res.sendStatus(200);
  });
});

router.post("/save", (req, res, next) => {
  const id = req.body._id;
  if (id) {
    ChapterPropertyNode.findByIdAndUpdate(
      id,
      new ChapterPropertyNode(req.body),
      { new: true },
      (err, changed) => {
        if (err) return res.send(500, err);
        res.status(200).send(changed);
      }
    );
  } else {
    const chapterPropertyNodes = new ChapterPropertyNode(req.body);
    chapterPropertyNodes.save().then((err, changed) => {
      if (err) return res.send(500, err);
      res.status(200).send(changed);
    });
  }
});

router.post("/saveAll", (req, res, next) => {
  const chapterPropertyNodes = req.body;
  // const chapterPropertyNodes = nodes.map(
  //   (node) => new ChapterPropertyNode(node)
  // );
  ChapterPropertyNode.bulkWrite(
    chapterPropertyNodes.map((node) => ({
      updateOne: {
        filter: { _id: node._id },
        update: { $set: node },
        upsert: true,
      },
    }))
  ).then((err) => {
    if (!err.isOk()) return res.send(500, err);
    res.status(200).send(err);
  });
});

module.exports = router;
