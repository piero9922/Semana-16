<template>
  <div class="content-albumes">
    <h4>
      Si desea ver los albumes de los usuarios, haga CLICK en el botón Albumes
      Usuarios
    </h4>
    <button @click="getAlbums">Albumes Usuarios</button>
    <div class="container-albumes">
      <div class="scroll">
        <div class="albumes" :key="album.id" v-for="album in albums">
          <h3>{{ album.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapState} from 'vuex';

export default {
  name: 'AlbumesUsuarios',
  computed: mapState(['albums']),
  methods: mapActions(['getAlbums']),
};
</script>

<style scoped>
h4 {
  font-weight: lighter;
  font-size: 20px;
  margin-top: 21px;
}

button {
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  outline: none;
  background-color: #333333;
  color: white;
}

button:hover {
  background-color: #abb9b0;
}
.container-albumes {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scroll {
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 10px;
  margin: 0 20px;
  height: 320px;
  width: 1200px;
}

.albumes {
  border: 1px solid green;
}

h3 {
  padding-bottom: 10px;
  text-transform: capitalize;
}
</style>
