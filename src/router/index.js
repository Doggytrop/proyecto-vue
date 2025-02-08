import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView,
  //   },
    {
      path: '/contador',
      name: 'Contador',

      component: () => import('../components/contador.vue'),
    },
    {
      path: '/Lista-de-tareas',
      name: 'ListaDeTareas',

      component: () => import('../components/Listadetares.vue'),
    },
     ],
})

export default router
