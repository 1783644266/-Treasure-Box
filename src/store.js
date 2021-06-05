import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardList: [],
    user: {}
  },
  mutations: {
    add(state, shop) {
      let a = state.cardList.findIndex(e => e.iid == shop.iid)
      if( a != -1) {
        state.cardList[a].count++
      }
      else {
        state.cardList.push(shop)
      }
    },
    cGoodState(state, iid) {
      state.cardList.forEach( e => {
        if(e.iid == iid) {
          e.pitchOn = !e.pitchOn
        }
      })
    },
    allChangeState(state, isChecked) {
      state.cardList.forEach(e => e.pitchOn = isChecked)
    },
    saveUserInfo(state, user) {
      state.user = user
    },
    deleteUserInfo(state) {
      state.user = {}
    }
  },
  actions: {
    addCardList({commit}, shop) {
      Vue.set(shop,"count",1)
      Vue.set(shop,"pitchOn",false)
      commit("add",shop)
    },//增加商品
    changeGoodState({commit}, iid) {
      commit("cGoodState",iid)
    },//更改单类商品选中状态
    allChange({commit}, isChecked) {
      commit("allChangeState" ,isChecked)
    }, //更改全部商品选中状态(全选/全不选)
    saveUser({commit}, user) {
      commit('saveUserInfo', user)
      let s = JSON.stringify(user)
      window.localStorage.setItem("userInfo", s)
    }
  },
  getters: {
    totalAmount(state) {
      return  state.cardList.reduce((p, e) => {
        if(e.pitchOn) {
          return p+e.count}
        else return p 
        
      }, 0)
    }, // 一共多少件
    totalKind(state) {
      return state.cardList.length
    },
    totalPrice(state) {
      let p =  state.cardList.reduce((p, e) => {
        if(e.pitchOn) {
          return p+e.count * e.price
        }
        else return p 
      }, 0)
      return p.toFixed(2)
    },
    allPitchOn(state,getters) {
      if(!getters.totalAmount) return false
      return state.cardList.findIndex(e => !e.pitchOn) == -1
    }
  }
})
