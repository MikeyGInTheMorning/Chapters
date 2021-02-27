const express = require("express");
const router = express.Router();

const Todo = require("../models/Todo");
const ToDoDate = require("../models/ToDoDate");

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
  else{
    res.send({todo: {}})
  }
});

router.get("/findByDate", (req, res, next) => {
  const date = req.body.date;
  if (date) {

    const lookupDate = toToDoDate(date)

    Todo.findOne({'Date.Year': lookupDate.Year, 'Date.Month': lookupDate.Month, 'Date.Day': lookupDate.Day}, (err, todo) => {
      if (err) return res.send(500, err);
      res.send({
        todo: todo,
      });
    });
  }
  else{
    res.send({todo: {}})
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
  if (id) {
    const todo = new Todo(req.body)

    validateDate(todo)

    Todo.findByIdAndUpdate(
      id,
      todo,
      { new: true },
      (err, changed, b) => {
        if (err) return res.send(500, err);
        res.status(200).send(changed);
      }
    );
  } else {
    const todo = new Todo(req.body);
    
    validateDate(todo)

    todo.save().then((err, changed) => {
      if (err) return res.send(500, err);
      res.status(200).send(changed);
    });
  }
});

const validateDate = (todo)=>{
  todo.Date = toToDoDate(todo.Date)
  return todo
}

const toToDoDate = (date) => {
  let d = date
  let retVal = date

  if(typeof date == 'string'){
    d = new Date(Date.parse(date))
    d = new Date(d.toUTCString()) // somehow need to fix timezone
  }

  if(d instanceof Date)
  {   
    retVal = new ToDoDate()
    retVal.Day = d.getDate()
    retVal.Month = d.getMonth() + 1
    retVal.Year  = d.getFullYear()
  }

  return retVal
}


module.exports = router;
