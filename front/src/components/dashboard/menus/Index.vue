<template>
  <div>
    <v-footer class="footer__component">
      <div class="menus">
        <v-btn v-for="link in links" :key="link" color="white" flat round>
          {{ link }}
        </v-btn>
      </div>
    </v-footer>
  </div>
</template>

<script>
export default {
  // OBJETIVO VISUALIZAR MENU DESLOGAR E CHAMAR OUTROS COMPONENTS UTILIZANDO O MENU
  components: {},
  name: 'Menus',
  data: () => ({
    links: ['Home', 'About Us', 'Team'],
  }),
}
</script>
<style scoped lang="stylus">
.footer__component
  display flex
  justify-content center
  max-height 30vh !important
</style>
