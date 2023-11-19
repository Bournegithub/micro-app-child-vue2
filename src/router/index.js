import Vue from 'vue'
import Router from 'vue-router'
// import Cookies from 'js-cookie'
// import HelloWorld from '@/components/HelloWorld'
import PageA from '@/view/page-a.vue'
import PageB from '@/view/page-b.vue'
import PageC from '@/view/page-c.vue'
import Login from '@/view/login.vue'

Vue.use(Router)

// Router.beforeEach((to, from, next) => {
//   let isLogin = false
//   const token = Cookies.get('token')
//   if (token && token !== '') {
//     isLogin = true
//   }
//   if (to.meta.requireAuth && !isLogin) {
//     next('/login')
//   } else {
//     next()
//   }
// })

export default new Router({
  mode: 'history',
  // 👇 设置基础路由，子应用可以通过window.__MICRO_APP_BASE_ROUTE__获取基座下发的baseroute，如果没有设置baseroute属性，则此值默认为空字符串
  base: window.__MICRO_APP_BASE_ROUTE__ || process.env.NODE_ENV === 'production' ? '/vue2/' : '/',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/page-a',
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/page-a',
      name: 'PageA',
      component: PageA,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/page-b',
      name: 'PageB',
      component: PageB,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/page-c',
      name: 'PageC',
      component: PageC,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requireAuth: false
      }
    }
  ]
})
