<template>
  <div>
    <form class="form">
      <v-text-field
        v-model="register.email"
        label="email"
        required
      ></v-text-field>
      <v-text-field
        v-model="register.name"
        label="name"
        required
      ></v-text-field>
      <v-text-field
        type="password"
        v-model="register.password"
        label="Senha"
        :rules="rulePassword"
        required
      ></v-text-field>
      <v-text-field
        type="password"
        v-model="register.repassword"
        :rules="rulePassword"
        label="Confirmar Senha"
        required
      ></v-text-field>
      <v-btn @click.prevent="registerFunction" class="btn__register"
        >Register</v-btn
      >
    </form>
  </div>
</template>

<script>
import { apiRegisterUser } from '@/services/apiReqres/'
import { mapActions } from 'vuex'
export default {
  // OBJETIVO RESGISTRAR USUARIO NA APLICAÇÃO
  components: {},
  name: 'Register',
  data: () => ({
    register: {
      email: 'eve.holt@reqres.in',
      name: 'Usuario teste',
      password: 'pistol',
      repassword: 'pistol',
    },
  }),
  computed: {
    rulePassword() {
      return [
        this.register.password === this.register.repassword ||
          `Senha Está diferente`,
      ]
    },
  },
  methods: {
    ...mapActions({
      SNACKBAR: 'SET_SNACKBAR',
    }),
    registerFunction() {
      apiRegisterUser(this.register)
        .then(res => {
          console.log(res, 'RESPOSTA')
          this.$store.dispatch('SET_LOGIN', {
            id: 2,
            email: 'Resposta Email',
            name: 'Resposta nome',
            token: res.data.token,
          })
          this.SNACKBAR({
            open: true,
            timeout: 3000,
            message: `Registrado com sucesso`,
            color: `teal`,
          })
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          setTimeout(() => {
            window.location.reload()
          }, 5000)
        })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.form
  display flex
  flex-direction column
  justify-content center

.btn__register
  font-weight bold !important
  color var(--grayl) !important
  background-color var(--primary) !important
</style>
