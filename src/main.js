import Vue from 'vue'
import App from './App.vue'
import router from "./router.js"    // import router 的router 一定要小写， 不要写成Router, 否则报 can't match的报错
import store from "./store/index.js"

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

