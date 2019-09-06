import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import colors from 'vuetify/lib/util/colors'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    // key: process.env.GOOGLE_KEY,
    key: 'AIzaSyDEaBim7hB871nYhXS0pMG98rZSoRkoOME',
    libraries: 'places',
  },
})
Vue.config.productionTip = false
Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.red.darken1, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
      },
    },
  },
})

new Vue({
  router,
  store,
  render: function(h) {
    return h(App)
  },
}).$mount('#app')
