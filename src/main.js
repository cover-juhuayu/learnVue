import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from "./router.js"    // import router 的router 一定要小写， 不要写成Router, 否则报 can't match的报错

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

