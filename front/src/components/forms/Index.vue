<template>
  <div>
    <div class="component">
      <v-card class="card__base mt-8">
        <Logo />
        <Login class="pa-4" v-if="flagForm" />
        <Register class="pa-4" v-else />
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  // OBJETIVO CRIAR BASE PARA LOGAR E CADASTRAR USUARIOS
  components: {
    Login: () => import('@/components/forms/Login.vue'),
    Register: () => import('@/components/forms/Register.vue'),
    Logo: () => import('@/components/forms/Logo.vue'),
  },
  data: () => ({
    flagForm: false,
  }),
  name: 'indexForms',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.component
  width 100%
  justify-content center
  display flex

.card__base
  border-radius 18px
  min-height 320px
  min-width 320px
</style>
