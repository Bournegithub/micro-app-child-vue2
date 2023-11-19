<template>
  <div class="hello" style="height: 100%">
    <!-- 1111 -->
    <div>
      <h2>父页面接收内容</h2>
      <!-- <p>store.state.hiddenTitle: {{ $store.state.hiddenTitle }}</p> -->
    </div>
    <!-- <iframe id="child-iframe" :src="`http://localhost:8080/cs-web/?appId=345&roleId=1005&dealerCode=11111`" width="100%" height="100%" name="testiframe" scrolling="no" noresize="noresize" frameborder="0"></iframe> -->
    <!--<iframe id="child-iframe" :src="`http://localhost:8081?appId=eyJ0eXAiOiJKV1QiLCJhb&dealerCode=jcxODd9.sFONCSvTgXmxFdcPR&roleId=YTWDPvgsSQcWJuE4tLquJorPSwmYQ&menu=menu1,menu2,menu4`" width="100%" height="100%" name="testiframe" scrolling="no" noresize="noresize" frameborder="0"></iframe>-->
    <!--<h1>{{ msg }}</h1>-->
    <!--<h2>Essential Links</h2>-->
    <!--<ul>-->
      <!--<li>-->
        <!--<a-->
          <!--href="https://vuejs.org"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--Core Docs-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a-->
          <!--href="https://forum.vuejs.org"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--Forum-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a-->
          <!--href="https://chat.vuejs.org"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--Community Chat-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a-->
          <!--href="https://twitter.com/vuejs"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--Twitter-->
        <!--</a>-->
      <!--</li>-->
      <!--<br>-->
      <!--<li>-->
        <!--<a-->
          <!--href="http://vuejs-templates.github.io/webpack/"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--Docs for This Template-->
        <!--</a>-->
      <!--</li>-->
    <!--</ul>-->
    <!--<h2>Ecosystem</h2>-->
    <!--<ul>-->
      <!--<li>-->
        <!--<a-->
          <!--href="http://router.vuejs.org/"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--vue-router-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a-->
          <!--href="http://vuex.vuejs.org/"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--vuex-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a-->
          <!--href="http://vue-loader.vuejs.org/"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--vue-loader-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a-->
          <!--href="https://github.com/vuejs/awesome-vue"-->
          <!--target="_blank"-->
        <!--&gt;-->
          <!--awesome-vue-->
        <!--</a>-->
      <!--</li>-->
    <!--</ul>-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      language: 'zh-CN'
    }
  },
  methods: {
    change (language) {
      this.language = language
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
