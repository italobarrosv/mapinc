<template>
  <div>
    <form class="form">
      <v-text-field v-model="auth.email" label="E-mail" required></v-text-field>
      <v-text-field
        required
        v-model="auth.password"
        label="Senha"
        type="password"
      ></v-text-field>
      <v-btn @click.prevent="login" class="btn__login">Logar</v-btn>
    </form>
  </div>
</template>

<script>
import { apiLoginUser } from '@/services/apiReqres/'
import { mapActions } from 'vuex'
export default {
  // OBJETIVO LOGAR USUARIO NA APLICACAO
  components: {},
  name: 'Login',
  data: () => ({
    auth: {
      email: 'eve.holt@reqres.in',
      password: '',
    },
  }),
  methods: {
    ...mapActions({
      SNACKBAR: 'SET_SNACKBAR',
    }),
    login() {
      apiLoginUser(this.auth)
        .then(res => {
          console.log(res, 'RESPOSTA')
          this.$store.dispatch('SET_USER', {
            id: 2,
            email: 'Email no Store',
            name: 'Nome no Store',
            token: res.data.token,
          })
          this.SNACKBAR({
            open: true,
            timeout: 10000,
            message: `Bem vindo`,
            color: `teal`,
          })
          this.$router.push({ name: 'dashboard' })
        })
        .catch(err => {
          console.log(err)
          this.SNACKBAR({
            open: true,
            timeout: 10000,
            message: `Dados Invalidos`,
            color: `danger`,
          })
        })
        .finally(() => {
          console.log('finally')
        })
    },
  },
}
</script>

<style scoped lang="stylus">
.form
  display flex
  flex-direction column
  justify-content center

.btn__login
  font-weight bold !important
  color var(--grayl) !important
  background-color var(--ternary) !important
</style>
