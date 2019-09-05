<template>
  <div class="footer__component">
    <v-toolbar dense floating class="footer__main">
      <div class="menus">
        <v-btn v-for="link in links" :key="link" icon class="ma-2 btnicons">
          <i :class="link"></i>
        </v-btn>
      </div>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  // OBJETIVO VISUALIZAR MENU DESLOGAR E CHAMAR OUTROS COMPONENTS UTILIZANDO O MENU
  components: {},
  name: 'Menus',
  data: () => ({
    links: [
      'fas fa-sign-out-alt icon',
      'fas fa-star bicon',
      'fas fa-user icon',
    ],
  }),
}
</script>
<style scoped lang="stylus">
.icon
  font-size 1.5em

.bicon
  font-size 2.3em

.footer__main
  border-radius 8px
  max-width 400px !important

.menus
  display flex
  justify-content center

.footer__component
  display flex !important
  justify-content center !important
  // max-height 20vh !important

.btnicons:nth-child(1)
  transform rotate(180deg)
</style>
