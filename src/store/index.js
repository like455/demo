import Vue from 'vue'
import Vuex from 'vuex'
import loginModule from "./modules/loginModule";
import routeModule from "./modules/routeModule";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    loginModule,
    routeModule
  }
})
