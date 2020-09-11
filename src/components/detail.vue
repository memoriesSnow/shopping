<template>
  <div class="detail">
      <van-sticky>
        <van-nav-bar
            title="商品详情"
            left-text="返回"
            right-text="分享"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
        </van-sticky>
      <div v-for ="item in list" :key ="item.id">
        <img :src ='item.goodimg'>
        <div>{{ item.info }}</div>
        <div>{{ item.price }}</div>
        <div>{{ item.name }}</div>
        <!-- <div>我是薛文龙，我可牛逼了，什么？不信？</div>
        <div>不信你看这是什么，沙包一样大的拳头！！</div> -->
      </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import { listObj } from '../server'//listObj有getList获取全部数据方法
import bus from '../eventbus';
import { mapState } from 'vuex';


export default {
    name:'detail',
    data(){
        return{
          allList:[],
          // list:[],
          // param:this.$route.params.id
        }
    },
    methods:{
      onClickLeft() {
        Toast("返回");
        window.history.back()
      },
      onClickRight() {
        Toast("按钮");
      },
      // getList(){
      //   listObj.getList().then(res =>{
      //       this.allList = res
      //       console.log(this.allList)
      //   })
      // },
      // showList(){
      //   console.log(this.allList)
      //   let b = this.allList.filter( item => item.id == this.param)
      //   this.list = b
      // }
    },
    computed:{
      ...mapState(['list'])
    },
    // created(){
    //   bus.$off('send')
    //   bus.$on('send',val=>{
    //     this.allList = val
    //   })
    // },
    mounted(){
      // this.showList()
      console.log(this.allList)
    }
}
</script>
<style lang="less">
.detail{
    width:100%;
    height:100%;
    background:blue;
}
</style>
