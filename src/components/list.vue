<template>
  <div class="list">
          <van-card
            v-for ="item in list" 
            :key ="item.id"
            :price="item.price"
            :desc="item.info"
            :title="item.name"
            :thumb="item.goodimg"
            @click-thumb="ADDLIST(item),toDetails(item)"
            >
            <template #bottom>
                <van-button @click="PUSH_GOODS(item)">添加购物车</van-button>  
            </template>
        </van-card>
    list组件
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name:'list',
    data(){
        return{
            
        }
    },
    props:{
        list:{
            type:Array,
            default:()=>[]
        }
    },
    methods:{
      ...mapActions(['PUSH_GOODS','ADDLIST']),
      toDetails(item){
          this.$router.push({
              name:'detail',
              params:{
                  id:item.id
              }
          })
      }
    },
}
</script>
<style lang="less" scoped>
.list{
    width:100%;
    background:blue;
}
.van-button{
    height:0.3rem;
    width:1.1rem;
    margin-left:1rem;
}
</style>
