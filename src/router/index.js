import { createRouter, createWebHistory } from 'vue-router'
// import "bootstrap/dist/css/bootstrap.css"; //kalian bisa import ini di main.js agar dapat digunakan secara global
import "datatables.net-bs4"; //kalian bisa import ini di main.js agar dapat digunakan secara global
import "datatables.net-responsive-bs4";

import MainLayout from '@/layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'beranda',
        component: function () {
          return import('../views/HomeView.vue')
        }
      },
      {
        path: '/about',
        name: 'tentang',
        component: function () {
          return import('../views/AboutView.vue')
        }
      }
    ]
  },
  {
    path: '/master',
    component: MainLayout,
    children: [
      {
        path: 'kategori/list',
        name: 'list_kategori',
        component: function () {
          return import('../views/master_menu/kategori/ListKategori.vue')
        }
      },
      {
        path: 'kategori/input',
        name: 'input_kategori',
        component: function () {
          return import('../views/master_menu/kategori/InputKategori.vue')
        }
      },
      {
        path: 'jenis/input',
        name: 'input_jenis',
        component: function () {
          return import('../views/master_menu/jenis/InputJenis.vue')
        }
      },
      {
        path: 'jenis/list',
        name: 'list_jenis',
        component: function () {
          return import('../views/master_menu/jenis/ListJenis.vue')
        }
      },
      {
        path: 'merk/input',
        name: 'input_merk',
        component: function () {
          return import('../views/master_menu/merk/InputMerk.vue')
        }
      },
      {
        path: 'merk/list',
        name: 'list_merk',
        component: function () {
          return import('../views/master_menu/merk/ListMerk.vue')
        }
      },
      {
        path: 'merk_motor/input',
        name: 'input_merk_motor',
        component: function () {
          return import('../views/master_menu/merk_motor/InputMerkMotor.vue')
        }
      },
      {
        path: 'merk_motor/list',
        name: 'list_merk_motor',
        component: function () {
          return import('../views/master_menu/merk_motor/ListMerkMotor.vue')
        }
      },
      {
        path: 'tipe_motor/input',
        name: 'input_tipe_motor',
        component: function () {
          return import('../views/master_menu/tipe_motor/InputTipeMotor.vue')
        }
      },
      {
        path: 'tipe_motor/list',
        name: 'list_tipe_motor',
        component: function () {
          return import('../views/master_menu/tipe_motor/ListTipeMotor.vue')
        }
      }
    ]
  },
  {
    path: '/konfigurasi',
    component: MainLayout,
    children: [
      {
        path: 'pengguna/input',
        name: 'input_pengguna',
        component: function () {
          return import('../views/konfigurasi/pengguna/InputPengguna.vue')
        }
      },
      {
        path: 'pengguna/list',
        name: 'list_pengguna',
        component: function () {
          return import('../views/konfigurasi/pengguna/ListPengguna.vue')
        }
      },
      {
        path: 'gudang/input',
        name: 'input_gudang',
        component: function () {
          return import('../views/konfigurasi/gudang/InputGudang.vue')
        }
      },
      {
        path: 'gudang/list',
        name: 'list_gudang',
        component: function () {
          return import('../views/konfigurasi/gudang/ListGudang.vue')
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
        return import('../views/auth/LoginView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
