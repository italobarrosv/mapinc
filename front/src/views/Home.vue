<template>
  <div class="home">
    <index />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  components: {
    index: () => import('@/components/index.vue'),
  },
  name: 'homePage',
}
</script>
