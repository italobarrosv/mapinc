<template>
  <div>
    <form class="form">
      <v-text-field v-model="email" label="email" required></v-text-field>
      <v-text-field v-model="name" label="name" required></v-text-field>
      <v-text-field v-model="password" label="Senha" required></v-text-field>
      <v-text-field
        v-model="repassword"
        label="Confirmar Senha"
        required
      ></v-text-field>
      <v-btn class="btn__register">Register</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  // OBJETIVO RESGISTRAR USUARIO NA APLICAÇÃO
  components: {},
  name: 'Register',
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
