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

      component: () => import('../modules/contador/components/contador.vue'),
    },
    {
      path: '/Lista-de-tareas',
      name: 'ListaDeTareas',

      component: () => import('../modules/listaDeTareas/components/Listadetares.vue'),
    },
    {
      path: '/registrar',
      name: 'registrar',

      component: () => import('../modules/registro/views/registrar.vue'),
    },
    {
      path: '/calcular',
      name: 'calcular',

      component: () => import('../modules/calcular/views/CalcularView.vue'),
    },
     ],
})

export default router
