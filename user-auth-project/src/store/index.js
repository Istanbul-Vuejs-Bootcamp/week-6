import Vue from 'vue'
import Vuex from 'vuex'

import auth from "./auth";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    globalIsLoading: false,
  },
  mutations: {
    SET_GLOBAL_LOADING(state, data) {
      state.globalIsLoading = data;
    }
  },
  actions: {
  },
  modules: {
    auth,
  }
})
