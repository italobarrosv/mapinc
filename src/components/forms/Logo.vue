<template>
  <div class="component__logo">
    <div class="logo mt-5">
      <i class="fas fa-cube fa-6x icon__logo"></i>
    </div>
  </div>
</template>

<script>
export default {
  // OBJETIVO RENDERIZAR A LOGO DO PROJETO
  components: {},
  name: 'Logo',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.icon__logo
  color var(--secondary)

.component__logo
  display flex
  justify-content center

.logo
  display flex
  flex-direction row
  justify-content center
  width 120px
  height 120px
  color var(--primary)
  // background var(--primary)
</style>
