import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Mainpage from '../components/Mainpage.vue'
import Top from '../components/Top.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Mainpage
  },
  {
    path: '/top',
    component: Top
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
