import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/myvue/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
