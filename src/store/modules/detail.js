/**
 * Created by summer on 2017/6/14.
 */
import * as types from '../mutation-types'

const state = {
  detailId: -1
}

// getters
const getters = {
  detailId: state => state.detailId
}

// actions
const actions = {
  setDetailId ({ commit }, id) {
    commit(types.SET_DETAIL_ID, id)
  }
}

// mutations
const mutations = {
  [types.SET_DETAIL_ID] (state, id) {
    state.detailId = id
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
