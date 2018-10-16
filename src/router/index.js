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
      path:'/detail',
      component:() =>import('@/pages/Detail'),
      meta: {
        title:"detail",
      }
    },
    {
      path:'/center',
      component:() =>import('@/pages/Center'),
      meta: {
        title:"个人中心",
      }
    },

  ]
})
