import { getToken, setToken, removeToken } from '../../utils/auth'

const state = {
  token: getToken()
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {
  // user login
  setToken({ commit }, token) {
    commit('SET_TOKEN', token)
    setToken(token)
  },

  // user logout
  logout({ commit, dispatch }) {
    commit('SET_TOKEN', '')
    removeToken()
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
