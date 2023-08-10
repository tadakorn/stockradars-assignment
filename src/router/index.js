import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/part-1'
    },
    {
      path: '/part-1',
      name: 'part-1',
      component: () => import('../views/PartOneView.vue')
    },
    {
      path: '/part-2',
      name: 'part-2',
      component: () => import('../views/PartTwoView.vue')
    }
  ]
})

export default router
