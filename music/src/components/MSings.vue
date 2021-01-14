<template>
  <div class="m-sing">
      <v-touch   @swipeleft="swiperLeft">
        <div class="title">我的音乐</div>
        <div class="mySing-list" v-if="islogin">
            <div>
                <i-recommend title="推荐歌单" more="更多" :recommendList="myReList"></i-recommend>
            </div>
            <div>
                <i-recommend title="收藏歌单" more="更多" :recommendList="myFavorList"></i-recommend>
            </div>
        </div>
      </v-touch>

  </div>
</template>

<script>
import IRecommend from './IRecommend.vue';
import httpRequest from "../request/index"
export default {
  components: { IRecommend },
    name:'MSing',
    data(){
        return {
            left:0,
            // 推荐
            myReList:[],
            //收藏歌单
            myFavorList:[],
        }
    },
    computed:{
        islogin(){
            return this.$store.getters.getIslogin;
        },
        userId(){
            return this.userList.profile.userId;
        }
    },
    methods:{
        //获取推荐歌单数据
        getRecommendSList(){
            httpRequest({
                method: 'get',
                url: '/api/recommend/resource?limit=3',
            }).then((data)=>{
                data.data.recommend.splice(2,1);
                this.myReList = data.data.recommend;
            }).catch((err)=>{
                console.error(err);
            })
        },
        //获取用户收藏歌单
        getFavor(userId){
            httpRequest({
                url:"api/user/playlist",
                params:{
                    uid:userId,
                    limit:3,
                }
            }).then((data)=>{
                let result = data.data;
                let singlist = [];
                result.playlist.forEach(lists => {
                    //经解构的结果对象
                   let deconResult = this.deconObj(lists,["coverImgUrl","name","id"]);
                   let obj = {
                       name:"",
                       picUrl:"",
                       id:""
                   }
                   obj.picUrl = deconResult.coverImgUrl;
                   obj.name = deconResult.name;
                   obj.id = deconResult.id;
                   singlist.push(obj)
                });
                this.myFavorList = singlist;
            }).catch((err)=>{
                console.log(err)
            })
        },
        swiperLeft(e){
            this.$store.state.activeFlage = 1;
            this.$router.push({'path':"/musichall"})
        },
        // 解构对象
        deconObj(obj,arr){
            return arr.reduce((iter, val) => (val in obj && (iter[val] = obj[val]), iter), {})
        }
    },
    created(){
        if(this.islogin){
            this.getRecommendSList();
            this.getFavor(this.$store.getters.getUserInfoList.profile.userId); 
        }else if(this.islogin == false){
            this.$toast('请先登陆');
        }
    }
}
</script>

<style scoped>
.m-sing{
    font-size: .7rem;
    border-radius: .5rem .5rem 0 0;
    background: white;
}

.mySing-list{
    padding:0 .5rem;
}

h5{
    font-weight: 400;
}

h3{
    text-align: center;
}

.touch{
    position: relative;
    left: 0;
    transition: all .1s;
}

.title{
    padding: .5rem;
    font-size: .6rem;
}

.sing-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>