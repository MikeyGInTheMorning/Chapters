import {createApp} from 'vue';
import App from "./App.vue";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBookOpen, faCalendar, faFileAlt, faPaperPlane, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


//https://fontawesome.com/icons?d=gallery&s=solid&m=free
library.add(faBookOpen, faCalendar, faPlus, faPaperPlane, faFileAlt)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .mount("#app");

