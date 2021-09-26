import {createRouter, createWebHistory} from 'vue-router'
import GLobalFeed from '@/views/GlobalFeed'
import YourFeed from '@/views/YourFeed'
import TagFeed from '@/views/TagFeed'
import Register from '@/views/Register'
import Login from '@/views/Login'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/',
    name: 'globalFeed',
    component: GLobalFeed
  },
  {
    path: '/feed',
    name: 'yourFeed',
    component: YourFeed
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: TagFeed
  },
  {
    path: '/aticles/new',
    name: 'createArticle',
    component: GLobalFeed
  },
  {
    path: '/aticles/:slug',
    name: 'article',
    component: GLobalFeed
  },
  {
    path: '/aticles/:slug/edit',
    name: 'editArticle',
    component: GLobalFeed
  },
  {
    path: '/settings',
    name: 'settings',
    component: GLobalFeed
  },
  {
    path: '/profile/:slug',
    name: 'userProfile',
    component: GLobalFeed
  },
  {
    path: '/profile/:slug/favorites',
    name: 'userProfileFavorite',
    component: GLobalFeed
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
