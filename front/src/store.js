import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyGoogle: '',
    id: '',
    email: '',
    name: '',
    token: '',
    currentPlace: {
      lat: '',
      lng: '',
    },
    lotPlace: '',
    favoritePlaces: [],
  },
  mutations: {
    SET_LOGIN(state, { id, email, name, token }) {
      state.id = id
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
    SET_LOGIN({ commit }, object) {
      commit('SET_LOGIN', object)
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
