import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        title: '首页入口'
      }
    },
    {
      path: '/about',
      // name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/About'),
       meta: {
        title: 'about'
      }
    },
    {
      path: '/center',
      // name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/Center'),
      meta: {
        title: 'center'
      }
    },
    {
      path: '/imageList',
      // name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/Images'),
       meta: {
        title: 'imageList'
      }
    },
    {
      path: '/poetry',
      // name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/Poetry'),
      meta: {
        title: 'poetry'
      }
    },
    {
      path: '/b',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/B'),
      meta: {
        title: 'b'
      }
    },
    {
      path: '/banner',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/Banner'),
      meta: {
        title: 'banner'
      }
    },
  ]
})
