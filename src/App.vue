<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import { globalApi } from './service/api.js'

export default {
  name: 'App',
  data () {
    return {
      iframeWidth: '0',
      iframeHeight: '0'
    }
  },
  // beforeCreate () {
  //   if (this.$route.path === '/login') {
  //     this.$options.iframeWidth = '100%'
  //     this.$options.iframeHeight = '100%'
  //   }
  // },
  // created () {
  //   window.addEventListener('message', (e) => {
  //     if (e) {
  //       console.log(e.data)
  //       if (e.data.command === 'sendToken' || e.data.command === 'updateToken') {
  //         this.$Cookies.set('token', e.data.token)
  //         if (this.$route.path === '/login') {
  //           this.iframeWidth = '0'
  //           this.iframeHeight = '0'
  //           if (this.$route.query && this.$route.query.redirect) {
  //             this.$router.push(this.$route.query.redirect)
  //           } else {
  //             this.$router.push('/')
  //           }
  //         }
  //       }
  //     }
  //   }, false)
  //   if (this.$route.path === '/login') {
  //     this.iframeWidth = '100%'
  //     this.iframeHeight = '100%'
  //   }
  // },
  mounted () {
    // const iframe = document.querySelector('iframe')
    // iframe.onload = function () {
    //   iframe.contentWindow.postMessage('from wrap', 'http://localhost:8081')
    // }
    // window.addEventListener('message', (e) => {
    //   if (e) {
    //     console.log(e.data)
    //   }
    // }, false)
    // let isLogin = false
    // const token = this.$Cookies.get('token')
    // if (token && token !== '') {
    //   isLogin = true
    // }
    console.log('this.$route', this.$route)
  },
  // watch: {
  //   '$route' (to, from) {
  //     console.log('to', to)
  //   }
  // },
  methods: {
    // test () {
    //   const params = {
    //     a: 1
    //   }
    //   globalApi.apiTest(params).then((res) => {
    //     console.log('test-res', res)
    //   }).catch((err) => {
    //     console.log('test-err', err)
    //   }).finally(() => {})
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.iframe {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
