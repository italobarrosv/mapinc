<template>
  <div class="index">
    <Forms />
  </div>
</template>

<script>
export default {
  components: {
    Forms: () => import('@/components/forms/Index.vue'),
  },
  name: 'indexHome',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.index
  background var(--grayl)
  height 100vh
  width 100vw
</style>
