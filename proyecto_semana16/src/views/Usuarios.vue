<template>
  <div class="usuarios">
    <ListaUsuarios
      msg="Si desea ver la lista de usuarios, haga CLICK en el botón Lista de usuarios "
    />
  </div>
</template>

<script>
import ListaUsuarios from '@/components/ListaUsuarios.vue';
export default {
  name: 'Usuarios',
  components: {
    ListaUsuarios,
  },
};
</script>

<style scoped>
.usuarios {
  height: 76%;
}
</style>
