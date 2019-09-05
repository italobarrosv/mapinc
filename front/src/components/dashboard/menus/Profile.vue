<template>
  <div class="component__card">
    <v-card>
      <v-img
        src="https://cdn.vuetifyjs.com/images/lists/ali.png"
        height="300px"
      >
        <v-layout column fill-height>
          <v-card-title>
            <v-spacer></v-spacer>
            <v-btn dark icon class="mr-3">
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn dark icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-card-title>
          <v-spacer></v-spacer>
          <v-card-title>
            <div class="title__name">{{ $store.state.name }}</div>
          </v-card-title>
        </v-layout>
      </v-img>
    </v-card>
  </div>
</template>

<script>
export default {
  // OBJETIVO VISUALIZAR DADOS DO USUARIO E DITAR
  components: {},
  props: {
    dialogProfile: {
      type: Boolean,
      default: () => ({}),
    },
  },
  data: () => ({}),
  name: 'Profile',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.title__name
  color var(--white)
.component__card
  display flex
  flex-direction column
  justify-content center
  align-items center
  max-width 320px
  max-height 600px
</style>
