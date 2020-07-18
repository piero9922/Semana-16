<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Presentación</router-link>
      <router-link to="/ListaDeUsuarios">Lista de Usuarios</router-link>
      <router-link to="/PostUsuarios">Post de Usuarios</router-link>
      <router-link to="/AlbumesUsuarios">Albumes de Usuarios</router-link>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
export default {
  name: 'App',
  components: {
    Footer,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #dcdcdc;
  height: 100vh;
}

#nav {
  padding: 20px 0;
  border-bottom: 1px solid white;
}

#nav a {
  font-weight: bold;
  color: rgb(138 133 133);
  margin: 0 10px;
  text-decoration: none;
}

#nav a:hover {
  text-decoration: underline;
}

#nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
