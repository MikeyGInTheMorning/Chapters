import axios from "axios";
import Chapter from "../models/Chapter"

const ChapterService = {
  getAll: (callback: Function) => {
    axios
      .get("http://localhost:3000/chapters/")
      .then((response: any) => callback(response.data.chapters));
  },
  save: (chapter: Chapter, callback: Function) => {
      axios.post("http://localhost:3000/chapters/save", chapter)
      .then((response: any) => callback(response.data));
  },
  delete: (chapter: Chapter, callback: Function) => {
      axios.post("http://localhost:3000/chapters/remove", chapter)
      .then((response: any) => callback(response.data));
  },
};

export default ChapterService;
