import axios from "axios";
import Chapter from "../models/Chapter";
import ChapterPropertyNode from "../models/ChapterPropertyNode"

const DataService = {
  Chapters: {
    getAll: (callback: Function) => {
      axios
        .get("http://localhost:3000/chapters/")
        .then((response: any) => callback(response.data.chapters));
    },
    getOne: (id: string, callback: Function) => {
      axios
        .get("http://localhost:3000/chapters/" + id)
        .then((response: any) => callback(response.data.chapter));
    },
    save: (chapter: Chapter, callback: Function) => {
      axios
        .post("http://localhost:3000/chapters/save", chapter)
        .then((response: any) => callback(response.data));
    },
    delete: (chapter: Chapter, callback: Function) => {
      axios
        .post("http://localhost:3000/chapters/remove", chapter)
        .then((response: any) => callback(response.data));
    },
  },
  ChapterPropertyNodes: {
    getAll: (callback: Function) => {
      axios
        .get("http://localhost:3000/chapterPropertyNodes/")
        .then((response: any) => callback(response.data.chapters));
    },
    getOne: (id: string, callback: Function) => {
      axios
        .get("http://localhost:3000/chapterPropertyNodes/" + id)
        .then((response: any) => callback(response.data.chapter));
    },
    getAllByParent: (parentId: string, callback: Function) => {
      axios
        .get("http://localhost:3000/chapterPropertyNodes/parent/" + parentId)
        .then((response: any) => callback(response.data.chapterPropertyNodes));
    },
    save: (chapter: ChapterPropertyNode, callback: Function) => {
      axios
        .post("http://localhost:3000/chapterPropertyNodes/save", chapter)
        .then((response: any) => callback(response.data));
    },
    delete: (chapter: ChapterPropertyNode, callback: Function) => {
      axios
        .post("http://localhost:3000/chapterPropertyNodes/remove", chapter)
        .then((response: any) => callback(response.data));
    },
  },
};

export default DataService;
