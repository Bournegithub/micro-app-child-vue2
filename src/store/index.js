import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user/user.js'

Vue.use(Vuex)
const $store = new Vuex.Store({
  state: {
    hiddenTitle: false
  },
  mutations: {
    setHiddenTitle (state, hiddenTitle) {
      state.hiddenTitle = hiddenTitle
    }
  },
  modules: {
    user
  }
})
export default $store
