<template>
  <div>
    <PlaceCurrent />
    <div ref="mapf" id="map" class="map__component"></div>
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
  methods: {
    mapEndPoint() {},
    initMap() {
      new google.mapsMap(this.$refs.mapf.id, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      })
    },
  },
  mounted() {
    console.log(this.$refs.mapf.id, 'resfsssssssssssssssss')
    // this.mapEndPoint()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.map__component
  height 85vh
</style>
