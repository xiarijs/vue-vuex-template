/**
 * Created by summer on 2017/6/14.
 */
import Vue from 'vue'
import vuex from 'vuex'
import Index from './modules/index'
import Detail from './modules/detail'

Vue.use(vuex)

export default new vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Index,
    Detail
  }
})
