import axios from "axios";

import ToDoDate from "../models/ToDoDate";

const DataService = {
  Todos: {
    getNew: (callback: Function) => {
      axios
        .get("/todos/")
        .then((response: any) => callback(response.data.chapters));
    },
    find: (id: string, callback: Function) => {
      axios
        .get("/todos/", {
          params: {
            _id: id,
          },
        })
        .then((response: any) => callback(response.data.chapter));
    },
    findByDate: (date: ToDoDate, callback: Function) => {
      axios
        .post("/todos/findByDate/", {
          date: date,
        })
        .then((response: any) => callback(response.data.todo));
    },
    findByDates: (startdate: ToDoDate, endDate: ToDoDate, callback: Function) => {
      axios
        .post("/todos/findByDates/", {
          startDate: startdate,
          endDate: endDate
        })
        .then((response: any) => callback(response.data.todos));
    },
    save: (chapter: string, callback: Function) => {
      axios
        .post("/todos/save", chapter)
        .then((response: any) => callback(response.data));
    },
    delete: (chapter: string, callback: Function) => {
      axios
        .post("/todos/remove", chapter)
        .then((response: any) => callback(response.data));
    },
  },
};

export default DataService;
