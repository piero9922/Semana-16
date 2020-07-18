<template>
  <div class="home">
    <Info />
  </div>
</template>

<script>
// @ is an alias to /src
import Info from '@/components/Info.vue';

export default {
  name: 'Home',
  components: {
    Info,
  },
};
</script>

<style scoped>
.home {
  height: 80%;
}
</style>
