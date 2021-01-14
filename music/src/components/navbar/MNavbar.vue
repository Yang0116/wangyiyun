<template>
  <div class="m-navbar">
      <ul>
          <li><a href="#"><i class="iconfont icon-bofanglishixianxing"></i><p>播放历史</p></a></li>
          <li><a href="#"><i class="iconfont icon-MV1"></i><p>我的电台</p></a></li>
          <li><a href="#"><i class="iconfont icon-shoucang"></i><p>我的收藏</p></a></li>
          <li><a href="#"><i class="iconfont icon-yanjing"></i><p>关注新歌</p></a></li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"MNavbar"
}
</script>

<style scoped>
.m-navbar{
    font-size: .7rem;
    background: black;
    padding-top: .5rem;
    padding-bottom: 1rem;
}

.m-navbar a,
.m-navbar i{
    color: #fdfdfd;
}

.m-navbar ul{
    display: flex;
    width: 100%;
}

.m-navbar li{
    flex: 1;
    flex-wrap: wrap;
    text-align: center;
}

.m-navbar i{
    font-size: 1rem;
}

.m-navbar p{
    margin-top: .5rem;
    font-size: .6rem;
}
</style>