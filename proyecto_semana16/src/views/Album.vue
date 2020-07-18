<template>
  <div class="album">
    <AlbumesUsuarios />
  </div>
</template>

<script>
import AlbumesUsuarios from '@/components/AlbumesUsuarios.vue';
export default {
  name: 'Album',
  components: {
    AlbumesUsuarios,
  },
};
</script>

<style scoped>
.album {
  height: 77%;
}
</style>
