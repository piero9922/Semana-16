<template>
  <div class="lista">
    <h4 class="title">{{ msg }}</h4>
    <button class="usuarios" @click="getUsers">Lista de usuarios</button>
    <div class="nombres">
      <ul :key="usuario.id" v-for="usuario in usuarios">
        <li>
          <p>
            El usario se llama <strong>{{ usuario.name }}</strong> y su correo
            es
            <strong>{{ usuario.email }}</strong>
          </p>
        </li>
        <a href="https://jsonplaceholder.typicode.com/posts">
          <button class="detalle">Ver Detalle</button>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapState} from 'vuex';

export default {
  name: 'ListaUsuarios',
  props: {
    msg: String,
  },
  computed: mapState(['usuarios']),
  methods: mapActions(['getUsers']),
};
</script>

<style scoped>
.title {
  font-weight: lighter;
  font-size: 20px;
}

.usuarios {
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  outline: none;
  background-color: #333333;
  color: white;
}

.usuarios:hover {
  background-color: #abb9b0;
}

.nombres {
  margin-top: 30px;
}

ul {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin-top: 10px;
}
p {
  margin: 3px 0;
}

.detalle {
  margin-left: 10px;
}
</style>
