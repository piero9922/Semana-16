import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paginas: ['Facebook', 'Github', 'Gitlab', 'Twitter'],
    usuarios: [],
    posts: [],
    albums: [],
  },
  mutations: {
    setUsers(state, user) {
      state.usuarios = user;
    },

    setPost(state, user) {
      state.posts = user;
    },

    setAlbum(state, user) {
      state.albums = user;
    },
  },
  actions: {
    async getUsers({commit}) {
      const data = await fetch('https://jsonplaceholder.typicode.com/users');
      const info = await data.json();

      commit('setUsers', info);
    },
    async getPosts({commit}) {
      const dataPost = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const infoPost = await dataPost.json();

      commit('setPost', infoPost);
    },
    async getAlbums({commit}) {
      const dataAlbum = await fetch(
        'https://jsonplaceholder.typicode.com/albums'
      );
      const infoAlbum = await dataAlbum.json();

      commit('setAlbum', infoAlbum);
    },
  },
  modules: {},
});
