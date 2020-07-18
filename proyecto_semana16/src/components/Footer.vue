<template>
  <div class="pieDePagina">
    <ul>
      <li :key="pagina" v-for="pagina in paginas">
        <a href="#"> {{ pagina }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'Footer',
  computed: mapState(['paginas']),
};
</script>

<style scoped>
.pieDePagina {
  height: 65px;
  border-top: 1px solid white;
}

ul {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100%;
}

li {
  list-style: none;
  margin-left: 10px;
}

a {
  color: #333333;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
