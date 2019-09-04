<template>
  <div>
    <PlaceCurrent />
    <div class="map"></div>
    <Menus />
  </div>
</template>

<script>
export default {
  // OBJETIVO RENDERIZAR O MAP DA API
  components: {
    PlaceCurrent: () => import('@/components/dashboard/place/PlaceCurrent.vue'),
    Menus: () => import('@/components/dashboard/menus/Index.vue'),
  },
  name: 'Map',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

.map
  height 85vh
</style>
