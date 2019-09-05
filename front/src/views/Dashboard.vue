<template>
  <div class="dashboard-page">
    <Map />
  </div>
</template>

<script>
export default {
  components: {
    Map: () => import('@/components/dashboard/Map.vue'),
  },
  name: 'dashboard-page',
  data: () => ({}),
}
</script>
<style lang="stylus" scoped>
.dashboard-page
  background var(--grayb)
  height 100vh
  width 100vw
</style>
