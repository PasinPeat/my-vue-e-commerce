import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/user/HomeView.vue'
import CartView from '@/views/user/CartView.vue'
import CheckoutView from '@/views/user/CheckoutView.vue'
import ProfileView from '@/views/user/ProfileView.vue'
import SearchView from '@/views/user/SearchView.vue'
import SuccessView from '@/views/user/SuccessView.vue'

import AdminLogin from '@/views/admin/LoginView.vue'
import AdminDashboard from '@/views/admin/DashboardView.vue'

import AdminOrderList from '@/views/admin/order/ListView.vue'
import AdminOrderDetail from '@/views/admin/order/DetailView.vue'

import AdminProductList from '@/views/admin/product/ListView.vue'
import AdminProductUpdate from '@/views/admin/product/UpdateView.vue'

import AdminUserList from '@/views/admin/user/ListView.vue'
import AdminUserUpdate from '@/views/admin/user/UpdateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView
    },
    //<-------------- add admin routes ------------------->
    {
      path: '/admin/login',
      name: 'admin-login',
      component: AdminLogin
    },
    {
      path: '/admin/dashbaord',
      name: 'admin-dashboard',
      component: AdminDashboard
    },
    {
      path: '/admin/order',
      name: 'admin-order',
      component: AdminOrderList
    },
    {
      path: '/admin/order/:id',
      name: 'admin-order-detail',
      component: AdminOrderDetail
    },
    {
      path: '/admin/products',
      name: 'admin-products',
      component: AdminProductList
    },
    {
      path: '/admin/products/create',
      name: 'admin-products-create',
      component: AdminProductUpdate
    },
    {
      path: '/admin/products/update/:id',
      name: 'admin-products-update',
      component: AdminProductUpdate
    },
    {
      path: '/admin/users/update/:id',
      name: 'admin-users-update',
      component: AdminUserUpdate
    },
    {
      path: '/admin/users',
      name: 'admin-users',
      component: AdminUserList
    }
  ]
})

export default router
