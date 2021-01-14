<template>
  <!-- 歌单详情列表 -->
  <div class="sing-list">hefeubjfeh</div>
</template>

<script>
import httpRequest from "@/request/index";
export default {
  name: "singList",
  data() {
    return {
      listName: "歌单列表",
      listImg:
        "https://p2.music.126.net/oJgskU2Xowj79T_5zACgTQ==/109951165601913233.jpg",
      listContent: "歌单简介",
      singList: "",
    };
  },
  computed: {
    //获取路由参数
    getSingId() {
      return this.$route.params.id;
    },
  },
  methods: {
      //获取歌单详情
      getSingListData(){
          httpRequest({
              url:"/api/playlist/detail?id="+this.getSingId,
          }).then((data)=>{
              let result = data.data;
              console.log(result)
          }).catch((error)=>{
              console.log(error);
          });
      }
  },
  created() {
      this.$store.commit("setActiveFlage", -1);
      this.getSingListData()
  },
};
</script>

<style scoped>
</style>