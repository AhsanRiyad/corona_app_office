import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'

//newly added
import VueCookies from 'vue-cookies'
import axios from 'axios'
import vuetify from './plugins/vuetify';

Vue.prototype.$axios = axios;
Vue.use(VueCookies);


// set default config
VueCookies.config('7d');


Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  vuetify,

  components: {
    App
  }
})
