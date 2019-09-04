import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: '',
    name: '',
    token: '',
    currentPlace: '',
    lotPlace: '',
    favoritePlaces: [],
  },
  mutations: {
    SET_LOGIN(state, { email, name, token }) {
      state.email = email
      state.name = name
      state.token = token
    },
    SET_LOGOUT(state) {
      state.email = ''
      state.name = ''
      state.token = ''
      state.currentPlace = ''
      state.lotPlace = ''
      state.favoritePlaces = []
    },
    SET_FAVORITEPLACE(state, data) {
      state.favoritePlaces = data
    },
    SET_CURRENTPLACE(state, data) {
      state.currentPlace = data
    },
    SET_LOTPLACE(state, data) {
      state.lotPlace = data
    },
  },
  actions: {
    SET_LOGIN({ commit }) {
      commit('SET_LOGIN')
    },
    SET_FAVORITEPLACE({ commit }) {
      commit('SET_FAVORITEPLACE')
    },
    SET_CURRENTPLACE({ commit }) {
      commit('SET_CURRENTPLACE')
    },
    SET_LOTPLACE({ commit }) {
      commit('SET_LOTPLACE')
    },
    SET_LOGOUT({ commit }) {
      commit('SET_LOGOUT')
    },
  },
})
