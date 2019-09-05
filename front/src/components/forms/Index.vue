<template>
  <div>
    <div class="component">
      <v-card class="card__base mt-8">
        <Logo />
        <Login class="pa-4" v-if="flagForm" />
        <Register class="pa-4" v-else />
        <div>
          <v-btn
            class="btn__register"
            outlined
            @click="treatedDateFilterBtnChoose"
            >{{ flagFormBtn }}</v-btn
          >
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  // OBJETIVO CRIAR BASE PARA LOGAR E CADASTRAR USUARIOS
  name: 'indexForms',
  components: {
    Login: () => import('@/components/forms/Login.vue'),
    Register: () => import('@/components/forms/Register.vue'),
    Logo: () => import('@/components/forms/Logo.vue'),
  },
  data: () => ({
    flagForm: true,
    flagFormBtn: 'CADASTRAR',
  }),
  methods: {
    treatedDateFilterBtnChoose() {
      this.flagForm = !this.flagForm
      switch (this.flagForm) {
        case true:
          return (this.flagFormBtn = 'CADASTRAR')
        case false:
          console.log('entrou aqui')
          return (this.flagFormBtn = 'JA POSSUO CONTA')
      }
    },
  },
  mounted() {},
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
