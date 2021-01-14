<template>
  <div class="musichall">
      <!-- 轮播图 -->
      <div class="swiper">
        <van-swipe ref="swipe" class="my-swipe" height="" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in swiperList" :key="item.bannerId">
            <img  :src="item.pic">
          </van-swipe-item>
        </van-swipe>
      </div>
    <v-touch  @swiperight="swiperright">
      <!-- 导航栏 -->
      <i-navbar></i-navbar>
      <!-- 推荐歌单 -->
      <i-recommend title="推荐歌单" more="歌单广场" :recommendList="SList"/>
      <!-- 新歌新碟 -->
      <i-recommend title="新歌新碟" more="更多新碟" :recommendList="newAlbumList"/>
    </v-touch>
  </div>
</template>

<script>
//axios
import httpRequest from "../request/index"
import INavbar from '../components/navbar/INavbar'
import IRecommend from './IRecommend.vue'
export default {
  components: { INavbar,IRecommend },
    name:"musichall",
    data(){
      return {
        swiperList:[],
        SList:[],
        newAlbumList:[]
      }
    },
    methods: {
      // 获取轮播图数据
      getSwiperData(){
        httpRequest({
            method: 'get',
            url: '/api/banner?type=2',
        }).then((data)=>{
          this.swiperList = data.data.banners;
        }).catch((err)=>{
          console.error(err);
        })
      },
      //获取推荐歌单数据
      getRecommendSList(){
          httpRequest({
            method: 'get',
            url: '/api/personalized?limit=6',
        }).then((data)=>{
          this.SList = data.data.result;
        }).catch((err)=>{
          console.error(err);
        })
      },
      //获取新碟数据
      getNewAlbum(){
        httpRequest({
            method: 'get',
            url: '/api/album/newest',
        }).then((data)=>{
          this.newAlbumList = data.data.albums;
        }).catch((err)=>{
          console.error(err);
        })
      },
      //左翻页
      swiperright(e){
        this.$store.state.activeFlage = 0;
        this.$router.push({'path':"/mymusic"})
      },
      //右翻页
      // swiperright(){}
    },
    created(){
      // 获取轮播图数据
      this.getSwiperData();
      //获取推荐歌单数据
      this.getRecommendSList();
      //获取新碟数据
      this.getNewAlbum()
    },
    mounted(){
      //轮播图重绘
      this.$refs.swipe.resize
    }
}
</script>

<style scoped>
.swiper img{
  width: 100%;
}
</style>