/**
 * Created by summer on 2017/6/14.
 */
import * as types from '../mutation-types'

const state = {
  bannerList: [
    {
      image: '',
      url: '',
      title: '焦点图1'
    },
    {
      image: '',
      url: '',
      title: '焦点图2'
    }
  ],
  added: [],
  checkoutStatus: null
}

// getters
const getters = {
  bannerList: state => state.bannerList
}

// actions
const actions = {
  getBannerList ({ commit }) {
    commit(types.GET_BANNER_LIST)
  }
}

// mutations
const mutations = {
  [types.GET_BANNER_LIST] (state, { bannerList }) {
    state.bannerList = bannerList
    console.log('向服务器端发出请求')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
