<template>
  <div class="footer__component">
    <v-toolbar dense floating class="footer__main">
      <div class="menus">
        <v-btn
          v-for="(m, position) in links"
          :key="position"
          icon
          class="ma-2 btnicons"
          @click="callComponents(m.action)"
        >
          <i :class="m.icon"></i>
        </v-btn>
      </div>
    </v-toolbar>
    <v-dialog dark v-model="dialogProfile" max-width="320">
      <Profile :dialog-profile="dialogProfile" />
    </v-dialog>
    <v-dialog dark v-model="dialogFavorite" max-width="320">
      <Favorite :dialog-favorite="dialogFavorite" />
    </v-dialog>
  </div>
</template>

<script>
export default {
  // OBJETIVO VISUALIZAR MENU DESLOGAR E CHAMAR OUTROS COMPONENTS UTILIZANDO O MENU
  components: {
    Profile: () => import('@/components/dashboard/menus/Profile.vue'),
    Favorite: () => import('@/components/dashboard/menus/Favorite.vue'),
  },
  name: 'Menus',
  data: () => ({
    dialogProfile: false,
    dialogFavorite: false,
    links: [
      {
        icon: 'fas fa-sign-out-alt icon',
        action: 'callComponentLogout',
      },
      { icon: 'fas fa-star bicon', action: 'callComponentFavorite' },
      { icon: 'fas fa-user icon', action: 'callComponentProfile' },
    ],
  }),
  methods: {
    logout() {
      this.$store.dispatch('SET_LOGOUT')
      setTimeout(() => {
        this.$router.push({ name: 'homepage' })
        window.location.reload()
      }, 2000)
    },
    callComponents(val) {
      switch (val) {
        case 'callComponentProfile':
          this.dialogProfile = true
          break
        case 'callComponentLogout':
          this.logout()
          break
        case 'callComponentFavorite':
          this.dialogFavorite = true
          break
      }
    },
  },
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

.btnicons:nth-child(1)
  transform rotate(180deg)
</style>
