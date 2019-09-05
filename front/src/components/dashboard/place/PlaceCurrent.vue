<template>
  <div class="placecurrent__component">
    <v-toolbar dense floating class="toolbar__component">
      <v-text-field
        hide-details
        prepend-icon="search"
        single-line
      ></v-text-field>
      <v-btn icon>
        <v-icon>my_location</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  // OBJETIVO IPUNT PARA BUSCAR O LUGAR ATUAL NA API
  components: {},
  name: 'CurrentPlace',
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.placecurrent__component
  display flex !important
  justify-content center !important

.toolbar__component
  border-radius 8px
  max-width 400px !important
</style>
