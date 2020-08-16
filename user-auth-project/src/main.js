import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import httpService from "./utils/axios";
import Toasted from 'vue-toasted';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false
Vue.$httpService = httpService;

Vue.use(Toasted)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
