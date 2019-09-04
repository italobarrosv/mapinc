<template>
  <div class="dashboard">
    <Map />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  components: {
    map: () => import('@/components/dashboard/map.vue'),
  },
  name: 'dashboard',
}
</script>
