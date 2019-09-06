<template>
  <div>
    <div class="map__component">
      <GmapMap :center="position" :zoom="18" class="map__style">
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
        />
      </GmapMap>
    </div>
    <div class="inputs__toolbar">
      <PlaceCurrent class="toolbar mt-5" />
      <Menus class="footer" />
    </div>
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
      lat: -8.0397483,
      lng: -34.9202588,
    },
    position: {
      lat: -8.0397483,
      lng: -34.9202588,
    },
    markers: [
      {
        position: {
          lat: -8.0397483,
          lng: -34.9202588,
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
.inputs__toolbar
  display flex
  flex-direction row
  justify-content center
  align-items center

.toolbar
  position absolute

.footer
  position absolute
  margin auto
  bottom 0

.map__component
  position absolute
  height 100%
  width 100%

.map__style
  height 100%
  width 100%
</style>
