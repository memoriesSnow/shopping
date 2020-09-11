<template>
  <div class="cart">
    <div style ="display:flex;justify-content:space-between">
      <van-checkbox v-model="flag" @click="allCheck">全选</van-checkbox>
      <van-button type="warning" size = "small" @click = 'CLEAR'>清空购物车</van-button>
    </div>
     <van-card
      v-for="item in goodsList" :key="item.id"
      :price="item.price"
      :desc="item.info"
      :title="item.name"
      :thumb="item.goodimg"
    >
   
      <template #tags>
        <div class = 'inputs'>
          <van-stepper v-model="item.goodsNum" theme="round" button-size="22" disable-input />
          <!-- <input type ='button' value ="-" style="width:20px;height:20px"/>
          <input @change ='totalPrice' :value ="item.goodsNum" style="width:30px;height:20px;text-align:center" disabled = 'disabled'/>
          <input type ='button' value ="+" style="width:20px;height:20px"/> -->
        </div>
        <div class ='checkbox'>
          <van-checkbox v-model ='item.checked' @click ='opsiteCheck'></van-checkbox>
        </div>
      </template>
    </van-card>
       <van-submit-bar :price="totalprice*100" button-text="提交订单">
        <van-checkbox v-model="flag" @click="allCheck">全选</van-checkbox>
       </van-submit-bar>
  </div>
</template>
<script>
import { mapState,mapActions,mapGetters } from 'vuex'
export default {
    name:'cart',
    data(){
      return{
        flag:false,
        price:0
      }
    },
    methods:{
      ...mapActions(['CLEAR']),
      allCheck(){
        if(this.flag == true){
          this.goodsList.forEach(item => {
            item.checked = true
          });
        } else{
          this.goodsList.forEach(item => {
            item.checked = false
          });
        }
      },
      opsiteCheck(){
        let a = this.goodsList.some(item =>{ return item.checked == false})
        if(a == []){
          this.flag = true
        } else {
          this.flag = false
        }
      },
      // totalPrice(){
      //   let b = this.goodsList.filter(item => item.checked == true)
      //   b.forEach(item =>{
      //     this.price += item.goodsNum * item.price
      //   })
      //   return 
      // },
    },
    computed:{
      ...mapState(['goodsList']),
      ...mapGetters(['totalprice'])
    },
    mounted(){
      console.log(this.goodsList)
    }
}
</script>
<style lang="less">
.cart{
    width:100%;
    height:130%;
}
.van-card{
  width:94%;
  margin-left:0.2rem;
}
.van-card__content{
  div{
    .inputs{
      margin-left:1.0rem;
      margin-top:0.2rem; 
      input{
        margin:0 2px;
        border:none;
      }
    }
    .checkbox{
      position:absolute;
      left:-1.35rem;
      top:0.4rem
    }
  }
}
.van-submit-bar{
  position:mixed;
  bottom:0.7rem;
}
.van-stepper{
  margin-top:0.3rem;
}
</style>
