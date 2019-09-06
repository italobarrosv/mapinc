<template>
  <div class="home">
    <Index />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  components: {
    Index: () => import('@/components/Index.vue'),
  },
  name: 'homePage',
}
</script>
