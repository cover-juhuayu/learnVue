<template>
  <div id="app">
    <h1>测试</h1>{{msg}}
    <br>
    <h1>这是vuex上state的值：{{this.$store.state.count}}</h1>
    <button @click="add">+</button>
    <div>{{count1}}</div>
    <button @click="del">-</button>
    <header>
    <!-- router-link 定义点击后导航到哪个路径下 -->
      <router-link to="/home">Home</router-link>
      <br>
      <router-link to="/about">About</router-link>
    </header>
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view> 
  </div>
</template>

<script>
import router from './router';
import{ mapState, mapGetters } from 'vuex'
export default {
  name: 'App',
  router,
  data(){
    return{
      msg:"App"
    }
  },
  computed: {
    vuexMsg(){
      return this.$store.state.msg
    },
    ...mapState({
      count1:state=>state.count
    }),
    ...mapGetters([
      'getCount',
      'isShow'
    ])
  },
  methods: {
    add(){
      // this.$store.commit('addCount', 1)
      this.$store.dispatch('getAddCount', 1)
    },
    del(){
      // this.$store.commit('delCount', 1)
      this.$store.dispatch('getDelCount', 1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
