<template>
  <div class="i-recommend">
      <div class="recommend-header">
          <h4>{{ title }}</h4>
          <div class="more">{{ more }}</div>
      </div>
      <div class="recommend-main">
          <ul>
              <li v-for="item in recommendList" @click="goSingList(item.id)" :data-sing-id="item.id" :key="item.id">
                  <img v-lazy="item.picUrl" alt="">
                  <p>{{item.copywriter?item.copywriter:item.name}}</p>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:"IRecommend",
    props:{
        title:String,
        more:String,
        recommendList:Array,
        listId:String
    },
    methods:{
        //跳转详情页面
        goSingList(pageId){
            this.$router.push({
                path:"/SingList",
                query:{
                    id:pageId
                }
            })
        }
    },
    created(){
    }
}
</script>

<style scoped> 
.i-recommend{
    margin-top: .75rem;
}

.recommend-header{
    display: flex;
    align-items: center;
    padding:0 .25rem;
    justify-content: space-between;
}

.recommend-header h4{
    font-size: .7rem;
}

.recommend-header .more{
    border-radius: 1rem;
    border: .05rem solid #666;
    padding:0 .15rem;
    text-align: center;
    line-height: 1rem;
    height: 1.1rem;
    font-size: .6rem;
}

.recommend-main ul{
    display: flex;
    flex-wrap: wrap;
}

.recommend-main ul li{
    width: 33.3%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    font-size: .6rem;
    padding-left: .25rem;
    margin-top: .5rem;
}

.recommend-main img{
    width: 100%;
}

.recommend-main ul li p{ 
    margin-top: .25rem;
    /* height: 20px; */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    

}
</style>