import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBookOpen,
  faCalendar,
  faFileAlt,
  faPaperPlane,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

//https://fontawesome.com/icons?d=gallery&s=solid&m=free
library.add(faBookOpen, faCalendar, faPlus, faPaperPlane, faFileAlt);

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 10000
});

createApp(App)
  .use(VueAxios, instance)
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
