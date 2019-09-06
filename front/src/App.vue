<template>
  <div id="app">
    <v-snackbar
      :value="GET_SNACKBAR.open"
      :color="GET_SNACKBAR.color"
      :timeout="GET_SNACKBAR.timeout"
      top
      vertical
    >
      {{ GET_SNACKBAR.message }}
      <v-btn text @click="SET_SNACKBAR({ open: false })">
        Close
      </v-btn>
    </v-snackbar>
    <router-view />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({}),
  computed: {
    ...mapGetters(['GET_SNACKBAR']),
  },
  methods: {
    ...mapActions(['SET_SNACKBAR']),
  },
}
</script>
<style lang="stylus">
@import '~@/assets/main.styl'

#app
  font-family 'Nunito', Helvetica, Arial, sans-serif
</style>
