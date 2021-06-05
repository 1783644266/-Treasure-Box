import Vue from 'vue'
import Router from 'vue-router'

const category  = () => import('views/category') 
const detail  = () => import('views/detail') 
const homepage = () => import('views/homepage') 
const login  = () => import('views/login') 
const profile  = () => import('views/profile') 
const shopcart  = () => import('views/shopcart') 


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homepage'
      
    },
    {
      path: '/homepage',
      component: homepage,
      meta: {
        title: '购物街',
      }
    },
    {
      path: '/category',
      component: category,
      meta: {
        title: '分类'
      }
    },
    {
      path: '/detail/:iid',
      component: detail,
    },
    {
      path: '/login',
      component: login,
    },
    {
      path: '/profile',
      component: profile,
      meta: {
        title: '我的'
      }
    },
    {
      path: '/shopcart',
      component: shopcart,
      meta: {
        title: '聚宝盆'
      }
    }
  ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}