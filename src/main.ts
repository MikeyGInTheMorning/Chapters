import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBookOpen,
  faCalendar,
  faFileAlt,
  faPaperPlane,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";

//https://fontawesome.com/icons?d=gallery&s=solid&m=free
library.add(faBookOpen, faCalendar, faPlus, faPaperPlane, faFileAlt);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .mount("#app");
