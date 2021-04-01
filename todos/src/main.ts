import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import VueAxios from 'vue-axios'


axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.timeout = 1000;

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios)
  .mount("#app");
