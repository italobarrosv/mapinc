<template>
  <div>
    <div class="component">
      <v-card class="card--base mt-8">
        <login v-if="flagForm" />
        <register v-else />
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  // OBJETIVO CRIAR BASE PARA LOGAR E CADASTRAR USUARIOS
  components: {
    login: () => import('@/components/forms/login.vue'),
    register: () => import('@/components/forms/register.vue'),
  },
  data: () => ({
    flagForm: true,
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

.card--base
  min-height 320px
  min-width 320px
</style>
