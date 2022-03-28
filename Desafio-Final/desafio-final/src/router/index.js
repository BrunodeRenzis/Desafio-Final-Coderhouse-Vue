import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')

  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')

  },

  {
    path: '/carrito',
    name: 'carrito',
    component: () => import(/* webpackChunkName: "about" */ '../views/CarritoComprasView.vue')
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListaProductosView.vue')
  },
  {
    path: '/detalleProducto/:id',
    name: 'detalleProducto',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetalleProductoView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
