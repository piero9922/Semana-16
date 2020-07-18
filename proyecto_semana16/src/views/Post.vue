<template>
  <div class="post">
    <PostUsuarios />
  </div>
</template>

<script>
import PostUsuarios from '@/components/PostUsuarios.vue';
export default {
  name: 'Post',
  components: {
    PostUsuarios,
  },
};
</script>

<style scoped>
.post {
  height: 77%;
}
</style>
