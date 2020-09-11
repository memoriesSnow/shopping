<template>
  <div id="home">
    <van-sticky>
      <van-nav-bar
        :title="title"
        left-text="返回"
        right-text="分享"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </van-sticky>
    <van-pull-refresh class="container" v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
      <div class="content">

        <router-view :list="list"/>
      </div>
    </van-pull-refresh>
    <div class="footer">
      <van-tabbar v-model="active">
        <van-tabbar-item v-for="item in totalNum" :key="item.id" :icon="item.icon" :info ='item.count'>
          <router-link :to="item.path">{{ item.alias }}</router-link>
        </van-tabbar-item>
        <!-- <van-tabbar-item icon="search">活动</van-tabbar-item>
        <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
        <van-tabbar-item icon="setting-o">我的</van-tabbar-item> -->
      </van-tabbar>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import { listObj } from './server/index.js'
import { mapGetters } from 'vuex';
import bus from './eventbus';
export default {
  name: "home",
  data() {
    return {
      list:[],
      routes:this.$router.options.routes[0].children,
      active: 0,
      isLoading: false,
      title:'商品列表'
    };
  },
  mounted(){
    this.getList();
  },
  destroyed(){
    bus.$emit('send',this.list)
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    getList(){
        listObj.getList().then(res =>{
            this.list = res
        })
    },
  },
  computed:{
    ...mapGetters(['totalNums']),
    totalNum(){
      let arr = this.routes.map(item =>{
        if(item.alias == '购物车'){
          this.$set(item,'count',this.totalNums)
        }
        return item     //map修改后返回的是原数组，使用return每一个item返回新的数据
      })
      return arr
    }
  },
  watch:{
    '$route.path':function(val,oldVal){
      switch(val){
        case '/act':
          this.title = '活动'
          break;
        case '/cart':
          this.title = '购物车'
          break;
        case '/mine':
          this.title = '个人中心'
          break;
        default: 
          this.title = '商品列表'
      }
    }
  }

};
</script>
<style lang="less">
.van-tabbar--fixed {
  position: none;
  height: 0.6rem;
  border-top: 2px solid #ccc;
}
.van-nav-bar {
  height: 0.6rem;
  border-bottom: 2px solid #ccc;
}
#home {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  .container {
    font-size: 26px;
    width: 100%;
    flex: 1;
    overflow-y: auto;
    padding: 0.1rem;
    .content{
      width: 100%;
      height: 100%;
    }
  }
  .footer {
    width: 100%;
    height: 0.7rem;
  }
  .header {
    width: 100%;
    height: 0.7rem;
  }
}
</style>
