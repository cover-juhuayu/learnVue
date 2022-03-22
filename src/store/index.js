import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

// https://www.cnblogs.com/mica/p/10757965.html

export default new Vuex.Store({
  state:{
    // 要设置的全局访问 state 对象
    // 要设置的初始属性值
    count: 3,
    ChangeShowCom: true,
  },
  getters:{
    // 实时监听 state 值的变化
    // 承载变化的 count 值
    getCount(state){
      return state.count
    },
    // 承载变化的 ShowCom 值
    isShow(state){
      return state.ChangeShowCom
    }
  },
  mutations:{
    addCount(state, num) {
      state.count = state.count + num
    },
    delCount(state, num) {
      if(state.count > 0){
        state.count = state.count - num
      } else {
        state.count = 0
      }
    },
    show(state) {
      state.ChangeShowCom = true
    },
    hide(state) {
      state.ChangeShowCom = false
    }
  },
  actions:{
    getAddCount(context, num){
      context.commit('addCount', num)
    },
    getDelCount(context, num){
      context.commit('delCount', num)
    },
    hideCom(context){
      context.commit('hide')
    },
    showCom(context){
      context.commit('show')
    }
  }
})


