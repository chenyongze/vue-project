import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      // name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/About')
    },
    {
      path: '/center',
      // name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/Center')
    },
    {
      path: '/imageList',
      // name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/Images')
    },
  ]
})
