import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false,
  base_api: 'http://localhost/backend_all/laravel_computer_shop/public/',
  axios_headers: {
    'Content-Type': 'application/x-www-form-urlencoded', 
    'Accept': 'application/json',
  },
  base: 'https://covid.babl.xyz/cvp/',
}

const mutations = {
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set (state, [variable, value]) {
    state[variable] = value
  }
}

export default new Vuex.Store({
  state,
  mutations
})