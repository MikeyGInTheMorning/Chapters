const express = require("express");
const router = express.Router();

const Todo = require("../models/Todo");
const TodoItem = require("../models/ToDoItem");
const ToDoDate = require("../models/ToDoDate");
const JournalEntry = require("../models/JournalEntry");

router.get("/", (req, res, next) => {
  const time = new Date()
  const newTodo = new Todo()
  newTodo.Date = toToDoDate(time)
  newTodo.Date.TimeStamp = time
  res.send({ toDo: newTodo });
});

router.get("/find", (req, res, next) => {
  const id = req.body._id;
  if (id) {
    Todo.find({ _id: id }, (err, todo) => {
      if (err) return res.send(500, err);
      res.send({
        todo: todo && todo.length > 0 ? todo[0] : [],
      });
    });
  }
  else {
    res.send({ todo: {} })
  }
});

router.post("/findByDate", (req, res, next) => {
  const date = req.body.date;
  if (date) {

    const lookupDate = toToDoDate(date)

    Todo.findOne({ 'Date.Year': lookupDate.Year, 'Date.Month': lookupDate.Month, 'Date.Day': lookupDate.Day }, (err, todo) => {
      if (err) return res.send(500, err);

      if (todo) {
        res.send({
          todo: todo,
        });
      } else {
        const t = new Todo()
        //t.ToDoItem = []
        for (let index = 0; index < 5; index++) {
          t.ToDoItem.push(new TodoItem())
        }
        t.JournalEntries.push(new JournalEntry())
        
        t.Date = toToDoDate(date)
        t._id = undefined
        res.send({ todo: t })
      }

    });
  }
  else {
    res.send({
      todo: {},
    });
  }
});

router.post("/findByDates", (req, res, next) => {
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  if (startDate && endDate) {

    Todo.find(
      {
        $and: [
          { $and: [{ "Date.Day": { "$gte": startDate.Day } }, { "Date.Day": { "$lte": endDate.Day } }] },
          { $and: [{ "Date.Month": { "$gte": startDate.Month } }, { "Date.Month": { "$lte": endDate.Month } }] },
          { $and: [{ "Date.Year": { "$gte": startDate.Year } }, { "Date.Year": { "$lte": endDate.Year } }] }
        ]
      },
      (err, todos) => {
        if (err) return res.send(500, err);

        if (todos) {
          res.send({
            todos: todos,
          });
        } else {
          res.send({
            todos: [{}],
          });
        }

      });
  }
  else {
    res.send({
      todos: [{}],
    });
  }
});

router.post("/remove", (req, res) => {
  const id = req.body._id;
  console.log(req.body);
  Todo.findByIdAndRemove(id, (err) => {
    if (err) return res.send(500, err);
    res.sendStatus(200);
  });
});

router.post("/save", (req, res, next) => {
  const id = req.body._id;

  Todo.findOne({ _id: id }, (err, todo) => {
    if (err) return res.send(500, err);

    const body = new Todo(req.body);

    validateDate(body)

    if (todo) {
      Todo.findByIdAndUpdate(
        id,
        body,
        { new: true },
        (err, changed, b) => {
          if (err) return res.send(500, err);
          res.status(200).send(changed);
        }
      );
    } else {
      body.save().then((changed, err) => {
        res.status(200).send(changed);
      });
    }

  });
});

const validateDate = (todo) => {
  todo.Date = toToDoDate(todo.Date)
  return todo
}

const toToDoDate = (date) => {
  let d = date
  let retVal = date

  if (typeof date == 'string') {
    d = new Date(Date.parse(date))
    d = new Date(d.toUTCString()) // somehow need to fix timezone
  }

  if (d instanceof Date) {
    retVal = new ToDoDate()
    retVal.Day = d.getDate()
    retVal.Month = d.getMonth() + 1
    retVal.Year = d.getFullYear()
  }

  return retVal
}


module.exports = router;
