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
  background-image url('~@/assets/16.jpg')
  background-repeat no-repeat
  background-color gold
  background-position center
  background-size cover
  height 100vh
  width 100vw
</style>
