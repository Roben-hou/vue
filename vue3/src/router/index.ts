//创建一个路由器。并暴露出去
//第一步:引入createRouter,createWebHashHistory
import { createRouter, createWebHistory } from "vue-router"
//引入组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/detail.vue'
//第二步:创建路由器
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/home',
      component: Home
    },
    {
      name: 'news',
      path: '/news',
      component: News,
      children: [
        {
          name: 'detail',
          path: 'detail',
          component: Detail
        }
      ]
    },
    {
      name: 'about',
      path: '/about',
      component: About
    }
  ]

})
export default router
