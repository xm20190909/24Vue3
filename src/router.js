import Vue from 'vue'
import Router from 'vue-router'
import Hobby from './views/Hobby.vue'
import success from './views/success.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path:'/Hobby',
      name:'Hobby',
      component:Hobby
    },
    {
      path:'/success',
      name:'success',
      component:success
    },
  ]
})
