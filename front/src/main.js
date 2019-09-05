import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDEaBim7hB871nYhXS0pMG98rZSoRkoOME',
    libraries: 'places',
  },
})
Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  router,
  store,
  render: function(h) {
    return h(App)
  },
}).$mount('#app')
