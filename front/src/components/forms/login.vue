<template>
  <div>
    <form class="form">
      <v-text-field v-model="email" label="E-mail" required></v-text-field>
      <v-text-field v-model="password" label="Senha" required></v-text-field>
      <v-btn class="btn__login">Logar</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  // OBJETIVO LOGAR USUARIO NA APLICACAO
  components: {},
  name: 'Login',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
