import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import colors from 'vuetify/lib/util/colors'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDEaBim7hB871nYhXS0pMG98rZSoRkoOME',
    libraries: 'places',
  },
})
Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: colors.teal.accent4,
    accent: colors.amber.accent4,
    secondary: colors.blueGrey.darken4,
    info: colors.lightBlue.accent3,
    error: colors.red.darken2,
    warning: colors.deepOrange.accent3,
    success: colors.teal.accent3,
  },
})

new Vue({
  router,
  store,
  render: function(h) {
    return h(App)
  },
}).$mount('#app')
