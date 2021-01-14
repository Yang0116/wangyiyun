<template>
  <div class="c-footer" v-show="footerIsShow">
      © 2019-2021 kanglang.xyz 版权所有
      赣ICP备19003694号-1
  </div>
</template>

<script>
export default {
    name:"CFooter",
    data(){
        return {
            footerIsShow:this.$store.state.copyrightShow,
        }
    },
    watch:{
        "store.state.copyrightShow"(isShow){
            this.footerIsShow = isShow;
        }
    },
}
</script>

<style scoped>
.c-footer{
    text-align: center;
    line-height: 40px;
    color: white;
    font-size: .7rem;
    motion-path: 1rem;
    background: rgb(55, 61, 65);
    margin-top: 1rem;
    margin-bottom: 3.5rem;
}
</style>