<template>
  <div class="header">
      <ul>
          <li>
              <router-link to="#"><i class="iconfont icon-menu"></i></router-link>
          </li>
          <li>
              <router-link to="/myMusic"><span @click="moveItem(0)" :class="{'active':activeFlage==0}">我的</span></router-link>
          </li>
          <li>
              <router-link to="/musichall"><span @click="moveItem(1)" :class="{'active':activeFlage==1}">音乐馆</span></router-link>
          </li>
          <li>
              <router-link to="/video"><span @click="moveItem(2)" :class="{'active':activeFlage==2}">视频</span></router-link>
          </li>
          <li>
              <router-link to="/search"><i class="iconfont icon-search"></i></router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"hader",
    data(){
        return {}
    },
    computed:{
        activeFlage(){
            // console.log(this.$store.state.activeFlage)
            return this.$store.state.activeFlage
        }
    },
    methods:{
       moveItem(flage){
           this.$store.state.activeFlage = flage;
       } 
    }
}
</script>

<style scoped>
.header{
    width: 100vw;
    height: 2.25rem;
    line-height: 2.25rem;
}

.header a span{
    font-size: .7rem;
}

i{
    font-size: .7rem;
}

.header ul{
    display: flex;
    height: 100%;
    flex: 1;
    justify-content: space-between;
    align-items: center;
}

.header ul li{
    height: 100%;
    text-align: center;
    flex: 1;
}

.active{
    color: #333333;
    font-size: .7rem;
    font-weight: 600;
}

</style>