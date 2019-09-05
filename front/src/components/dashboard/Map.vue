<template>
  <div>
    <div class="map__component">
      <GmapMap :center="position" :zoom="15" class="map__style">
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
        />
      </GmapMap>
    </div>
    <PlaceCurrent class="toolbar" />
    <Menus class="footer" />
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
  data: () => ({
    center: {
      lat: 10.0,
      lng: 10.0,
    },
    position: {
      lat: 10.0,
      lng: 10.0,
    },
    markers: [
      {
        position: {
          lat: 12.0,
          lng: 12.0,
        },
      },
    ],
  }),
  methods: {},
  mounted() {
    // this.mapEndPoint()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.toolbar
  position absolute
  left 50%

.footer
  position absolute
  left 50%
  bottom 0

.map__component
  position absolute
  height 100vh
  width 100vw

.map__style
  height 100%
  width 100%
</style>
