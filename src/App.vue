<template>
  <div id="app">
    <h1>测试</h1>{{msg}}
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
export default {
  name: 'App',
  router,
  data(){
    return{
      msg:"App"
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
