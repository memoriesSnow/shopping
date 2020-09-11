import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsList:[],
    list:[]
  },
  mutations: {
    pushGoods(state,goods){
      let exist = state.goodsList.find(newGood =>newGood.id == goods.id)
      if(!exist){
        Vue.set(goods,'goodsNum',1)
        Vue.set(goods,'checked',false)
        state.goodsList.push(goods)
      }else{
        let list = state.goodsList.map((item)=>{
          if(item.id == goods.id){
            item.goodsNum++
          }
          return item;
        })
        Vue.set(state,'goodsList',list)
      }
    },
    clear(state){
      state.goodsList = []
    },
    addList(state,item){
      state.list = []
      state.list.push(item)
    }
  },
  actions: {
    PUSH_GOODS({commit},goods){
      commit('pushGoods',goods)
    },
    CLEAR({commit}){
      commit('clear')
    },
    ADDLIST({commit},item){
      commit('addList',item)
    }
  },
  getters: {
    totalNums(state){
      let num = 0;
      state.goodsList.forEach((item)=>{
       num += item.goodsNum 
      })
      return num;
    },
    totalprice(state){
      let price = 0;
        state.goodsList.forEach((item)=>{
          if(item.checked){
            price += item.goodsNum * item.price
          }
        })
      return price;
    }
  }
})
