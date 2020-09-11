import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import( '../Home'),
    redirect:'/list',
    children:[
      {
        path:'list',
        name:'list',
        alias:'商品列表',
        icon:'point-gift-o',
        component: () => import('../components/list')
      },
      {
        path:'act',
        name:'act',
        alias:'活动',
        icon:'underway-o',
        component: () => import('../components/act')
      },
      {
        path:'cart',
        name:'cart',
        alias:'购物车',
        icon:'shopping-cart-o',
        component: () => import('../components/cart')
      },
      {
        path:'mine',
        name:'mine',
        alias:'我的',
        icon:'manager-o',
        component: () => import('../components/mine')
      },
    ]
  },
  {
    path:'/detail/:id',
    name:'detail',
    component: ()=> import('../components/detail')
  }
]

const router = new VueRouter({
  routes
})

export default router
