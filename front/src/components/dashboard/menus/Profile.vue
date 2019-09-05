<template>
  <div class="component__card">
    <v-card max-width="320"> </v-card>
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
.component__card
  display flex
  flex-direction row
  justify-content center
  align-items center
  max-width 320px
  max-height 600px
</style>
