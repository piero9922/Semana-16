import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/ListaDeUsuarios',
    name: 'Usuarios',
    component: () => import('../views/Usuarios.vue'),
  },
  {
    path: '/PostUsuarios',
    name: 'Post',
    component: () => import('../views/Post.vue'),
  },
  {
    path: '/AlbumesUsuarios',
    name: 'Album',
    component: () => import('../views/Album.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
