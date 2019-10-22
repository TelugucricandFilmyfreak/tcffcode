import Vue from 'vue'
import VueRouter from 'vue-router'
import Dailyposts from '../views/Dailyposts.vue'
import Entertainment from '../views/Entertainment.vue'
import Technology from '../views/Technology.vue'
import Reviews from '../views/Reviews.vue'
import Sports from '../views/Sports.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dailyposts',
    component: Dailyposts
  },
  {
    path: '/Entertainment',
    name: 'Entertainment',
    component:Entertainment
  },
  {
    path: '/Technology',
    name: 'Technology',
    component: Technology
  },
  {
    path: '/Reviews',
    name: 'Reviews',
    component:Reviews
  },
  {
    path: '/Sports',
    name: 'Sports',
    component:Sports
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
