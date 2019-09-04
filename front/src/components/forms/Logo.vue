<template>
  <div class="component__logo">
    <div class="logo"></div>
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

.component__logo
  display flex
  justify-content center

.logo
  width 120px
  height 60px
  background var(--primary)
</style>
