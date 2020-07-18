<template>
  <div class="content-post">
    <h4>
      Si desea ver los posts de los usuarios, haga CLICK en el botón Post
      Usuarios
    </h4>
    <button @click="getPosts">Post Usuarios</button>
    <div class="postUsuarios">
      <div class="scroll">
        <div class="post" :key="post.id" v-for="post in posts">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {mapActions} from 'vuex';
export default {
  name: 'PostUsuarios',
  computed: mapState(['posts']),
  methods: mapActions(['getPosts']),
};
</script>

<style scoped>
h4 {
  font-weight: lighter;
  font-size: 20px;
  margin-top: 21px;
}

.postUsuarios {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.scroll {
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  margin: 0 20px;
  height: 350px;
  width: 1200px;
}

.post {
  border: 1px solid green;
}

h3 {
  border-bottom: 1px solid green;
  padding-bottom: 10px;
  text-transform: capitalize;
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
</style>
