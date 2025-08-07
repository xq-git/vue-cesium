import { createRouter, createWebHistory } from 'vue-router'
import { route as initRoute } from './module/init/index'

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home.vue'),
    },
    {
      path: '/bim',
      name: 'bim',
      component: () => import('@/views/bim.vue'),
    },
    ...initRoute
  ]


})

export default routes