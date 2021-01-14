<template>
  <div class="i-navbar">
    <ul class="icon">
      <li>
        <a href="">
          <i class="iconfont icon-yinyue"></i>
          <p>推荐新音乐</p>
        </a>
      </li>
      <li>
        <a href="">
          <i class="iconfont icon-jiemu"></i>
          <p>推荐电台</p>
        </a>
      </li>
      <li>
        <a href="">
          <i class="iconfont icon-paixing"></i>
          <p>排行榜</p>
        </a>
      </li>
      <li>
        <a href="">
          <i class="iconfont icon-MV"></i>
          <p>推荐节目</p>
        </a>
      </li>
      <li>
        <a href="">
          <i class="iconfont icon-diantai"></i>
          <p>推荐mv</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "INavbar",
  data() {
    return {
      navbarData: {},
    };
  },
};
</script>

<style scoped>
.i-navbar {
  width: 100%;
  height: 3rem;
  margin: 0.5rem 0;
}

.i-navbar ul {
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  font-size:.6rem;
}

.i-navbar ul li{
  text-align: center;
  margin: .15rem;
}

.i-navbar ul li:hover a{
  color: #d81e06;
}

.i-navbar ul li i {
  color: #d81e06;
  font-size: .9rem;
}

.i-navbar ul li p{
  margin-top: .5rem;
}


</style>