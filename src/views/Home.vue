<template>
  <div id="home" class="home">
    <!-- 头部导航栏 -->
    <nav-bar
      :fixed="true"
      :placeholder="true"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
        <Icon name="search" size="18" />
      </template>
      <template #right>
        <span class="iconfont icon-gerenzhongxin"></span>
      </template>
      <template #title>
        <span>{{titlePosition}}</span>
      </template>
    </nav-bar>
    
    <!-- 轮播宫格菜单 -->
    <swipe class="my-swipe" :show-indicators="false" autoplay="2000">
      <Swipe-item>
        <grid>
          <Grid-item v-for="(item,index) in swiperList1" :key="index">
            <van-image width="0.84rem" height="0.84rem" fit="cover" :src="'https://fuss10.elemecdn.com/'+item.image_url"/>
            <span>{{item.title}}</span>
          </Grid-item>
        </grid>
      </Swipe-item>

      <Swipe-item>
        <grid>
          <Grid-item v-for="(item,index) in swiperList2" :key="index">
            <van-image width="0.84rem" height="0.84rem" fit="cover" :src="'https://fuss10.elemecdn.com/'+item.image_url"/>
            <span>{{item.title}}</span>
          </Grid-item>
        </grid>
      </Swipe-item>
    </swipe>

    <!-- 商家列表 -->
    <ShopList :shopListArr="shopListArr"></ShopList>
  </div>
</template>

<script>
import {getPosiData,getIndexEntryData,getRestaurantsData} from '@/api/data'
import { NavBar,Icon ,Swipe, SwipeItem,Grid, GridItem,Image } from 'vant';
import ShopList from '@/views/ShowList.vue'

export default {
  name: 'Home',

  data(){
    return {
      titlePosition:"",
      swiperList1:[],
      swiperList2:[],
      shopListArr:[]
    }
  },

  components: {
    NavBar,Icon,Swipe, SwipeItem,Grid, GridItem,vanImage:Image,ShopList
  },

  methods:{
    onClickLeft() {
      console.log('搜索按钮被点击')
    },
    onClickRight() {
      console.log('个性化设置被点击')
    },
  },

  async mounted(){
    getPosiData().then((res)=>{
      this.titlePosition = res.name;
    });
    
    ((async ()=>{
      let res = await getIndexEntryData()
      console.log(res)
      this.swiperList1 = res.slice(0,8);
      this.swiperList2 = res.slice(8,16);
    })());
    
    getRestaurantsData().then((res)=>{
      this.shopListArr = res
    })
  }
}
</script>

<style lang="less">
#home{
  .van-nav-bar{
    background: #3190e8;
  }
  .van-nav-bar__title,.van-nav-bar .van-icon,.van-nav-bar__right{
    color: #fff;
    font-size: 0.30rem;
  }
  .my-swipe{
    height: 3.6rem;
  }
}
</style>
