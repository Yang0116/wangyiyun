<template>
  <div class="play" v-show="playShow">
      <div class="sing-circle">
        <img src="http://p4.music.126.net/LeB8VO2-mhAnZPiDsAAo4A==/109951165612436501.jpg" alt="">
      </div>
      <div class="sing-context">
          <p class="sing-title">sunck</p>
          <p class="sing-hint">滑动可以上下切换</p>
        </div>
        <div class="play-icon">
          <i class="iconfont icon-bofang"></i>
          <i class="iconfont icon-gedan"></i>
        </div>
  </div>
</template>

<script>
export default {
    name:"play",
    data(){
      return {
        playShow:this.$store.state.playShow,
      }
    },
    watch:{
      "$store.state.playShow"(isShow){
        return this.playShow = isShow; 
      }
    },
}
</script>

<style scoped>
.play{
  background: #fff;
  width: 100%;
  font-size: .6rem;
  padding: .5rem .25rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;

  z-index: 1000;
  bottom: 0;
  border-top:soild #333 .05rem;
}

.sing-circle{
  width: 2.5rem;
  border-radius: 100%;
  overflow: hidden;
}

.sing-circle img{
  width: 100%;
  height: 100%;

}

.sing-context{
  padding-left: .5rem;
  width: 70%;
  line-height: 1rem;
}

.sing-title{
  font-weight: 600;
}


.play-icon{
  flex: 1;
}

.play-icon i{
  font-size: 1.3rem;
  color: #d81e06;
  margin: .2rem;
}
</style>