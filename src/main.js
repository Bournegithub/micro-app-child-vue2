// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './public-path'
import Vue from 'vue'
import App from './App'
import router from './router'
import Cookies from 'js-cookie'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import Antd from 'ant-design-vue'
// import dynamicForm from 'vue-dynamic-form-antd'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Antd)
Vue.prototype.$Cookies = Cookies
// Vue.use(dynamicForm)
// window.addEventListener('message', function (e) {
//   let result = false
//   if (e.data && e.data.command) {
//     if (e.data.command === 'hiddenNavBar') {
//       result = true
//     }
//     if (e.data.command === 'showNavBar') {
//       result = false
//     }
//     store.commit('setHiddenTitle', result)
//     document.getElementById('child-iframe').contentWindow.postMessage({ command: e.data.command, status: 'success' }, 'http://volvo-dev.autodev.aas')
//   }
//   console.log('addEventListener', e.data)
//   console.log('addEventListener', e.origin)
// })
/* eslint-disable no-new */

// router.beforeEach((to, from, next) => {
//   let isLogin = false
//   const token = Cookies.get('token')
//   if (token && token !== '') {
//     isLogin = true
//   }
//   if (to.meta.requireAuth) {
//     if (isLogin) {
//       next()
//     } else {
//       next({path: '/login', query: {redirect: to.fullPath}})
//     }
//   } else {
//     next()
//   }
// })

// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: { App },
//   template: '<App/>'
// })
const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
window.unmount = () => {
  app.$destroy()
}
