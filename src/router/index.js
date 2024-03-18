import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'BERANDA',
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
        }
      },
      {
        path: '/about',
        name: 'TENTANG',
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'LOGIN',
    component: function () {
        return import(/* webpackChunkName: "about" */ '../views/auth/LoginView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
