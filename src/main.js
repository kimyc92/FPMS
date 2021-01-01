import Vue from 'vue'
import App from './App.vue'
import { router } from './routers/index.js';
import { store } from './store/index.js';
//import axios from "axios";
/*
import cors from "cors"
Vue.use(cors({
    origin: 'https://api.hnpwa.com',
    //origin: true,
    credentials: true,
}));
*/
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//Vue.use(cors);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
