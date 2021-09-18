import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home'
import Register from '@/views/Register'
import Login from '@/views/Login'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = new createRouter({
  routes,
  history: createWebHistory()
})

// import Vue from 'vue'

//Vue.use(VueRouter)

// const router = new VueRouter({
//   routes
// })

export default router