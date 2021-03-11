import { getToken, setToken, removeToken, getUser } from '../../utils/auth'

const state = {
  token: getToken(),
  user: null
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },

  SET_USER: (state, user) => {
    state.user = user
  }
}

const actions = {
  // user login
  setToken({ commit }, token) {
    commit('SET_TOKEN', token)
    setToken(token)
  },

  setUser({ commit }) {
    getUser().then(response => {
      const { data } = response
      commit('SET_USER', data)
    }).catch(error => {
      commit('SET_TOKEN', '')
      removeToken()
    })
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
