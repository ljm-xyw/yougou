import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios'
Vue.prototype.$http=axios

import VueAwesomeSwiper from 'vue-awesome-swiper'
import cssreset from './assets/css/reset200802.css'
// require styles
import '../node_modules/swiper/dist/css/swiper.css'
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
Vue.use(Toast);

Vue.use(VueAwesomeSwiper)
/* import { Search } from 'mint-ui'; */
Vue.use(VueRouter);
/* Vue.use(Mint); */
import Vuex from 'vuex'
Vue.use(Vuex)

import router from './assets/js/router.js';
// import store from './assets/js/store.js';
import mint from '../node_modules/mint-ui/lib/style.css';
import swiper from '../node_modules/swiper/dist/css/swiper.css';

/* Vue.component(Search.name, Search); */

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
