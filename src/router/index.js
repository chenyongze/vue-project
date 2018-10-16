import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/Index'),
      meta: {
        title: '首页入口'
      }
    },
    {
      path: '/list',
      name: 'home',
      component: home,
      meta: {
        title: '首页入口'
      }
    },
    {
      path: '/about',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/About'),
       meta: {
        title: 'about'
      }
    },
    {
      path:'/detail',
      component:() =>import('@/pages/Detail'),
      meta: {
        title:"detail",
      }
    },

  ]
})
